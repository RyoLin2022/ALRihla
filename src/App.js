import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Staking from './Pages/Staking';
import LPStaking from './Pages/LPStaking';
import Community from './Pages/Community';
import { useState } from 'react';
import { ethers } from 'ethers';


export let savedAcc;
let currentAccount = null;

function App() {
  switchEthereumChain();

  async function switchEthereumChain() {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x38' }],
      });
    } catch (e) {
      if (e.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x38',
                chainName: 'Smart Chain',
                nativeCurrency: {
                  name: 'Binance',
                  symbol: 'BNB', // 2-6 characters long
                  decimals: 18
                },
                blockExplorerUrls: ['https://bscscan.com'],
                rpcUrls: ['https://bsc-dataseed.binance.org/'],
              },
            ],
          });
        } catch (addError) {
          alert("Please change the chain to BSC");
          console.error(addError);
        }
      }
    }
  }

  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {
    console.log('Requesting account...');
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
      currentAccount = accounts[0];
      savedAcc = accounts[0];
    } catch (error) {
      console.log('error connecting');
    }
  
    //Check if Metamask Exist
    if (window.ethereum) {
      console.log('detected');
    } else {
      console.log('not detected');
      alert("Please Install Metamask");
    }
  }
  
  async function getBalance() {
    let accBalance = await window.ethereum.request({
      method: "eth_getBalance",
      params:
        [currentAccount, 'latest']
    });
    var balanceDEC = Number(accBalance).toString(10);
    var inWeiBal = balanceDEC.length;
    var balanceBtn = document.getElementById("balance-btn");
  
    var str = Math.pow(10, (inWeiBal - 22));
    var rounded = Math.round(str * parseInt(balanceDEC.substring(0, 4)) * 10000) / 10000;
    balanceBtn.innerText = rounded + " BNB";
  }
  
  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
  
      var btnConnect = document.getElementById("connect-btn");
      document.getElementById("balance-btn").hidden = false;
  
      let lengthAcc = currentAccount.length;
      btnConnect.innerText = currentAccount.substring(0, 4) + "..." + currentAccount.substring(lengthAcc - 4, lengthAcc);
      getBalance();
      alert("Wallet connected successfully!");
    } else {
      alert("Please install an injected Web3 wallet");
    }
  }

  return (
    <div className="App" id="bg">      
      <button id="balance-btn" hidden>
        balance
      </button>
      <button id="connect-btn" onClick={connectWallet}>
        Connect Wallet
      </button>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/staking' element={<Staking />} />
          <Route path='/lpstaking' element={<LPStaking />} />
          <Route path='/community' element={<Community />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

