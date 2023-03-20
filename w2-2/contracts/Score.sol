// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.19;


contract Score {
    Teacher _teacher;
    mapping (address => uint) scores;
    constructor() {

    }

    function setTeacher(Teacher teacher) public {
        _teacher=teacher;
    }

    modifier  onlyTeacher {
        require(Teacher(msg.sender)==_teacher,"only Teacher");
        _;
    }

    function changeScore(address student,uint score) public {
        require(score<=100,"score must less than 100");
        scores[student]=score;
    }

}


interface IScore {
    function changeScore(address student,uint score)external;
}

contract Teacher {

    constructor() {
    }

    function changeScore(address contract_score,address student,uint score) public {
        IScore(contract_score).changeScore(student,score);
    }
}