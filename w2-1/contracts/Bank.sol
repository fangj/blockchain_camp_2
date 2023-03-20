contract Bank {

    mapping(address => uint)public deposits;

    constructor() {
        
    }

    receive() external payable{
        deposits[msg.sender]=msg.value;
    }

    function withdraw() public {
        uint deposit=deposits[msg.sender];
        deposits[msg.sender]=0;
        (bool success,)=msg.sender.call{value:deposit}(new bytes(0));
        require(success,'ETH transfer failed');
    }

    function myDeposited() public view returns(uint) {
        return deposits[msg.sender];
    }
}