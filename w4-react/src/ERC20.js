/*
1. 连接节点（Provider）
• MetaMask 插件会在⻚⾯中注⼊ window.ethereum 对象
2. 获取或创建钱包对象
3. 初始化合约对象(合约地址 + ABI )
4. 从合约获取数据、发起交易
*/

import "./ERC20.css"

import { ethers } from 'ethers'
import { useState } from 'react';


import bankAddr from './deployments/dev/Vault.json'
import erc20Addr from './deployments/dev/MyERC20.json'

import bankAbi from './deployments/abi/Vault.json'
import erc20Abi from './deployments/abi/MyERC20.json'

let provider,chainId,signer,erc20Token,bank;


export default function ERC20(){

    const [account,setAccount] = useState(null);
    const [recipient,setRecipient] = useState(null);
    const [amount,setAmount] = useState(null);
    const [balance,setBalance] = useState(null);
    const [ethbalance,setEthbalance] = useState(null);
    const [name,setName] = useState(null);
    const [decimal,setDecimal] = useState(null);
    const [symbol,setSymbol] = useState(null);
    const [supply,setSupply] = useState(null);
    const [stakeAmount,setStakeAmount] = useState(null);
    const [myDeposit,setMyDeposit] =useState(0);
    const [approveTo,setApproveTo] = useState(null);
    const [approveAmount,setApproveAmount] = useState(null);
    const [approved,setApproved] = useState(null);
    const [bankAddress,setBankAddress] =useState(bankAddr.address);


    async function connect(){
        //连接节点（Provider）
        await initProvider()
        //获取或创建钱包对象
        await initAccount()
  
        // 如果获取到了账号,进行合约初始化，并读取合约数据
        if (account) {
          //初始化合约对象(合约地址 + ABI )
           initContract()
          readContract();
          getApproved();
        }
    }

    //连接节点（Provider）,从MetaMask 插件注入的window.ethereum 对象获取
    async function initProvider(){
        if(window.ethereum) {
            provider = new ethers.providers.Web3Provider(window.ethereum);
            let network = await provider.getNetwork()
            chainId = network.chainId;
            console.log("chainId:", chainId);
  
        } else{
          console.log("Need install MetaMask")
        }
    }
  
    //获取或创建钱包对象
    async function initAccount(){
        try {
          const accounts = await provider.send("eth_requestAccounts", []);
          console.log("accounts:" + accounts);
          setAccount(accounts[0]);
          signer = provider.getSigner()
        } catch(error){
            console.log("User denied account access", error)
        }
    }

    //初始化合约对象(合约地址 + ABI )
    async function initContract() {
      try{
         erc20Token = new ethers.Contract(erc20Addr.address, 
          erc20Abi, signer);
  
         bank = new ethers.Contract(bankAddr.address, 
          bankAbi, signer);
      }catch(error){
        console.error("initContract fail", error)
      }
  
    }

    //从合约获取数据
    async function readContract() {
      // debugger
      const rawBalance=await provider.getBalance(account);
      const balance=ethers.utils.formatUnits(rawBalance, 18);
      setBalance(balance)

      const name=await erc20Token.name()
      setName(name)

      const decimal=await erc20Token.decimals()
      setDecimal(decimal)

      const symbol=await erc20Token.symbol()
      setSymbol(symbol)

      const rawSupply=await erc20Token.totalSupply()
      const supply=ethers.utils.formatUnits(rawSupply, 18)
      setSupply(supply)

      const rawMyDeposit=await bank.accounts(account)
      const myDeposit=ethers.utils.formatUnits(rawMyDeposit, 18);
      setMyDeposit(myDeposit)

    };

    
    async function getApproved() {
      const rawApproved=await erc20Token.allowance(account, bankAddress);
      setApproved(ethers.utils.formatUnits(rawApproved, 18));
    }

    async function approve() {
      if (!erc20Token) {
        alert("先链接钱包")
      }

      try {
        let amount = ethers.utils.parseUnits(approveAmount, 18);
        let tx = await erc20Token.approve(approveTo, amount);
        await tx.wait();
        getApproved()
      }
      catch(e) {
        console.error("approve",e)
          alert("Error , please check the console log:", e)
      }
    }


    async function deposit() {
      if (!bank) {
        alert("先链接钱包")
      }

      try {
        let amount = ethers.utils.parseUnits(approveAmount, 18);
        let tx = await bank.deposit( amount);
        await tx.wait();
        getApproved();
        readContract();
      }
      catch(e) {
        console.error("deposit",e)

          alert("Error , please check the console log:", e)
      }
    }

    
    async function withdraw(){
      if (!bank) {
        alert("先链接钱包")
      }

      let tx = await bank.withdraw();
      await tx.wait();
      readContract();
    }

    return <> <h3>ERC20</h3>
     <button onClick={connect}> 链接钱包 </button>
     <div>
       我的地址 : {  account }
     </div>
      <div className="block">
        Token 名称 : { name  } , 
        Token 符号 : {  symbol } , 
        Token 精度 : { decimal }
        <br /> Token 发行量 : { supply }, 我的 Token 余额 : { balance  }
        <br /> 我的ETH余额 : { ethbalance  }
      </div>

      <div className="block">
        <h3>授权 存款(两笔交易):</h3>
        Bank合约地址：{ bankAddress }
        {approved?<div >已授权额度: { approved }</div>:null}

        <div >
          <br />授权到:
          <input type="text" value={approveTo} onChange={e=>setApproveTo(e.target.value)}/>
          <br />金额
          <input type="text" value={approveAmount} onChange={e=>setApproveAmount(e.target.value)} />
          <br />
          
          <button onClick={approve}> 授权 </button>
          <button onClick={deposit}> 存款 </button>
        </div>
      </div>

      <div className="block">
      <h3> 取款</h3>
      <div>
      我的存款：{myDeposit }
      <button onClick={withdraw}>取款</button>
      </div>
      </div>
    </>
}