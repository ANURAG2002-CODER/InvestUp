const award=artifacts.require('../contracts/award.sol');

module.exports=function(deployer){
    deployer.deploy(award);
}