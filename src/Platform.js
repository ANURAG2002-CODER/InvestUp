import "./App.css";
import Web3 from "web3";
import Award from "./contracts/Award.json";
import React, { useEffect, useState } from "react";

function Platform() {
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState("");
  const [entrepreneurName, setEntrepreneurName] = useState("");
  const [entrepreneurPoints, setEntrepreneurPoints] = useState(0);
  const [supporterName, setSupporterName] = useState("");
  const [supporterAddress, setSupporterAddress] = useState("");
  const [pointsToAward, setPointsToAward] = useState(0);
  useEffect(() => {
    const init = async () => {
      try {
        const ganacheProvider = new Web3.providers.HttpProvider(
          "http://127.0.0.1:7545"
        );
        const web3Instance = new Web3(ganacheProvider);

        const chainId = await web3Instance.eth.getChainId();
        console.log("Chain Id: ", chainId);

        const accounts = await web3Instance.eth.getAccounts();
        console.log("Accounts: ", accounts);
        setAccount(accounts[0]);

        const networkId = await web3Instance.eth.net.getId();
        const deployedNetwork = Award.networks[networkId];
        const awardContract = new web3Instance.eth.Contract(
          Award.abi,
          deployedNetwork && deployedNetwork.address
        );
        setContract(awardContract);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  const createEntrepreneur = async () => {
    // Call the createEntrepreneur function on the TrustPoints contract
    await contract.methods
      .createEntrepreneur(supporterName)
      .send({ from: account });

    // Get the entrepreneur's name and points
    const entrepreneur = await contract.methods.entrepreneurs(account).call();
    setEntrepreneurName(entrepreneur.name);
    setEntrepreneurPoints(entrepreneur.points);
  };

  const awardPoints = async () => {
    // Call the awardPoints function on the award contract
    await contract.methods
      .awardPoints(account, pointsToAward)
      .send({ from: supporterAddress });

    // Get the entrepreneur's points
    const entrepreneur = await contract.methods.entrepreneurs(account).call();
    setEntrepreneurPoints(entrepreneur.points);
  };

  return (
    <div>
      <h1>TrustPoints Platform</h1>
      <h2>Entrepreneur</h2>
      <p>Name: {entrepreneurName}</p>
      <p>Points: {entrepreneurPoints}</p>
      <p> Creating new Entrepreneur</p>
      <label>
        Name:
        <input
          type="text"
          value={supporterName}
          onChange={(e) => setSupporterName(e.target.value)}
        />
      </label>
      <button onClick={createEntrepreneur}>Create Entrepreneur</button>
      <hr />
      <h2>Supporter</h2>
      <label>
        Address:
        <input
          type="text"
          value={supporterAddress}
          onChange={(e) => setSupporterAddress(e.target.value)}
        />
      </label>
      <br />
      <label>
        Points:
        <input
          type="number"
          value={pointsToAward}
          onChange={(e) => setPointsToAward(e.target.value)}
        />
      </label>
      <br />
      <button onClick={awardPoints}>Award Points</button>
    </div>
  );
}

export default Platform;
