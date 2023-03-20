const { expect } = require("chai");
const { ethers } = require("hardhat");

  describe("Counter",function(){
    let counter;
    let owner,otherAccount;

    async function init(){
        [owner,otherAccount]=await ethers.getSigners();
        console.log("owner",owner.address);
        console.log("otherAccount",otherAccount.address);
        const Counter = await ethers.getContractFactory("Counter");
        counter =await Counter.deploy();
        await counter.deployed();
        console.log("counter:"+counter.address);
    }

    before(async function(){
        await init();
    })

    it("init equal 0",async function(){
        expect(await counter.counter()).to.equal(0);
    })

    it("owner can count",async function(){
        const counter_before=await counter.counter();
        const tx=await counter.count();
        await tx.wait();
        expect (await counter.counter()).to.equal(counter_before+1);
    })

    it("owner cann't count",async function(){
        const counter_other=await counter.connect(otherAccount);
        expect (counter_other.count()).to.be.revertedWith("only owner can count");
    })

  })