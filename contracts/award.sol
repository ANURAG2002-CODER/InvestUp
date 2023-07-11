//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Award {
    struct Entrepreneur {
        string name;
        address account;
        uint points;
    }

    mapping(address => Entrepreneur) public entrepreneurs;
    mapping(address => bool) hasVoted;
    uint numEntrepreneurs;
    mapping(uint256 => address) public entrepreneurAddresses;

    function createEntrepreneur(string memory _name) public {
        require(bytes(_name).length > 0, "Name must not be empty");
        entrepreneurs[msg.sender] = Entrepreneur(_name, msg.sender, 0);
        entrepreneurAddresses[numEntrepreneurs] = msg.sender;
        numEntrepreneurs++;
    }


    function getEntrepreneurs() public view returns (Entrepreneur[] memory) {
        Entrepreneur[] memory entrepreneurList = new Entrepreneur[](numEntrepreneurs);
        uint index = 0;
        for (uint i = 0; i < numEntrepreneurs; i++) {
            address entrepreneurAddress = entrepreneurAddresses[i];
            if (entrepreneurs[entrepreneurAddress].account != address(0)) {
                entrepreneurList[index] = entrepreneurs[entrepreneurAddress];
                index++;
            }
        }
        return entrepreneurList;
    }

    function awardPoints(address _entrepreneur) public {
        require(!hasVoted[msg.sender], "You have already voted.");
        entrepreneurs[_entrepreneur].points += 1;
        hasVoted[msg.sender] = true;
    }
}