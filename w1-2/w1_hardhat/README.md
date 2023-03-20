# 练习
• 修改 Counter 合约，仅有部署者 可以调⽤ count();
• 使⽤ Hardhat 部署修改后的 Counter 
• 使⽤ Hardhat 测试 Counter:
• Case1: 部署者成功调⽤ count()
• Case 2: 其他地址调⽤ count() 失败
• 代码开源到区块浏览器（npx hardhat verify …） / 写上合约地址

```
//启动hardhat测试节点
npx hardhat node
//部署
npx hardhat run .\scripts\deploy.js 
//测试
npx hardhat test --network development


//部署到goerli网络
npx hardhat run .\scripts\deploy.js --network goerli
Counter deployed to 0x368058C61909B53c980a7416Fcd7F4E085977eD9


//校验,需要api key,https://decert.me/tutorial/solidity/tools/hardhat/#%E4%BB%A3%E7%A0%81%E5%BC%80%E6%BA%90%E9%AA%8C%E8%AF%81

npx hardhat verify 0x368058C61909B53c980a7416Fcd7F4E085977eD9  --network goerli


```