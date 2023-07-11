import React, { useState, useEffect } from "react";
import Award from "./contracts/Award.json";
import Web3 from "web3";
import "./css/dashboard.css";
import Navbar from "./Navbar";

const Dashboard = ({ response }) => {
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [entrepreneurs, setEntrepreneurs] = useState([]);

  useEffect(() => {
    const init = async () => {
      try {
        response =
          response === ""
            ? "0x6203DB90E483108193cFa0D259de008413f80AA1"
            : response;
        setAccount(response);
        const ganacheProvider = new Web3.providers.HttpProvider(
          "http://127.0.0.1:8545"
        );
        const web3Instance = new Web3(ganacheProvider);

        const chainId = await web3Instance.eth.getChainId();
        console.log("Chain Id: ", chainId);

        const accounts = await web3Instance.eth.getAccounts();
        console.log("Accounts: ", accounts);

        const networkId = await web3Instance.eth.net.getId();
        const deployedNetwork = Award.networks[networkId];
        const awardContract = new web3Instance.eth.Contract(
          Award.abi,
          deployedNetwork && deployedNetwork.address
        );
        setContract(awardContract);
        const entrepreneurs = await awardContract.methods
          .getEntrepreneurs()
          .call();
        setEntrepreneurs(getUnique(entrepreneurs, "account"));
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  const handleAddEntrepreneur = (name) => {
    // Call the createEntrepreneur function on the TrustPoints contract
    contract.methods
      .createEntrepreneur(name)
      .send({ from: account, gas: "1500000" });
  };

  const getUnique = (arr, comp) => {
    // store the comparison  values in array
    const unique = arr
      .map((e) => e[comp])

      // store the indexes of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the false indexes & return unique objects
      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  };

  const handleEndorsement = async (entrepreneur) => {
    try {
      console.log(entrepreneur.name);
      await contract.methods
        .awardPoints(entrepreneur.account)
        .send({ from: account });
    } catch (err) {
      window.alert("You have already voted.");
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="dashboard">
        <div className="welcome">
          <h3>Welcome, {account}!</h3>
        </div>

        <div className="entrepreneur-section">
          <div className="add-entrepreneur">
            <p className="section-title">Become an Entrepreneur</p>
            <p>
              Enter your name:{" "}
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </p>
            <button
              className="submit-button"
              onClick={() => handleAddEntrepreneur(name)}
            >
              Submit
            </button>
          </div>

          <div className="endorse-entrepreneur">
            <p className="section-title">Endorse an Entrepreneur</p>
            <h3>Entrepreneurs</h3>
            <ul className="entrepreneur-list">
              {Array.isArray(entrepreneurs) ? (
                entrepreneurs.map((entrepreneur) => (
                  <li key={entrepreneur.account} className="entrepreneur-card">
                    <div className="card-content">
                      <p className="card-name">
                        {entrepreneur.name.length === 0
                          ? ""
                          : entrepreneur.name}
                      </p>
                      <p className="card-points">
                        {entrepreneur.points} points
                      </p>
                    </div>
                    <button
                      className="endorse-button"
                      onClick={() => handleEndorsement(entrepreneur)}
                    >
                      Endorse
                    </button>
                  </li>
                ))
              ) : (
                <p>No entrepreneurs found.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// import React, { useState, useEffect } from "react";
// import Award from "./contracts/Award.json";
// import Web3 from "web3";

// const Dashboard = ({ response }) => {
//   const [name, setName] = useState("");
//   const [account, setAccount] = useState("");
//   const [contract, setContract] = useState(null);
//   const [entrepreneurs, setEntrepreneurs] = useState([]);

//   useEffect(() => {
//     const init = async () => {
//       try {
//         response =
//           response === ""
//             ? "0x6203DB90E483108193cFa0D259de008413f80AA1"
//             : response;
//         setAccount(response);
//         const ganacheProvider = new Web3.providers.HttpProvider(
//           "http://127.0.0.1:8545"
//         );
//         const web3Instance = new Web3(ganacheProvider);

//         const chainId = await web3Instance.eth.getChainId();
//         console.log("Chain Id: ", chainId);

//         const accounts = await web3Instance.eth.getAccounts();
//         console.log("Accounts: ", accounts);

//         const networkId = await web3Instance.eth.net.getId();
//         const deployedNetwork = Award.networks[networkId];
//         const awardContract = new web3Instance.eth.Contract(
//           Award.abi,
//           deployedNetwork && deployedNetwork.address
//         );
//         setContract(awardContract);
//         const entrepreneurs = await awardContract.methods
//           .getEntrepreneurs()
//           .call();
//         setEntrepreneurs(getUnique(entrepreneurs, "account"));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     init();
//   }, []);

//   const handleAddEntrepreneur = (name) => {
//     // Call the createEntrepreneur function on the TrustPoints contract
//     contract.methods
//       .createEntrepreneur(name)
//       .send({ from: account, gas: "1500000" });
//   };

//   const getUnique = (arr, comp) => {
//     // store the comparison  values in array
//     const unique = arr
//       .map((e) => e[comp])

//       // store the indexes of the unique objects
//       .map((e, i, final) => final.indexOf(e) === i && i)

//       // eliminate the false indexes & return unique objects
//       .filter((e) => arr[e])
//       .map((e) => arr[e]);

//     return unique;
//   };

//   const handleEndorsement = async (entrepreneur) => {
//     try {
//       console.log(entrepreneur.name);
//       await contract.methods
//         .awardPoints(entrepreneur.account)
//         .send({ from: account });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <>
//       <div style={{ textAlign: "center", fontSize: "20px" }}>
//         <h3>Welcome, {account}!</h3>

//         <p style={{ fontSize: "30px", fontWeight: "bold" }}>
//           Become an Entrepreneur
//         </p>
//         <p>
//           Enter your name : {}
//           <input
//             type="text"
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//           />
//         </p>
//         <button
//           style={{ fontSize: "20px", cursor: "pointer" }}
//           onClick={() => handleAddEntrepreneur(name)}
//         >
//           Submit
//         </button>
//         <p style={{ fontSize: "30px", fontWeight: "bold" }}>
//           Endorse an entrepreneur
//         </p>
//         <h3>Entrepreneurs</h3>
//         <ul style={{ listStyleType: "none" }}>
//           {Array.isArray(entrepreneurs)
//             ? entrepreneurs.map((entrepreneur) => (
//                 <li key={entrepreneur.account}>
//                   {entrepreneur.name.length === 0 ? "" : entrepreneur.name} -{" "}
//                   {entrepreneur.points} points {}
//                   <button
//                     style={{ cursor: "pointer" }}
//                     onClick={() => handleEndorsement(entrepreneur)}
//                   >
//                     Endorse
//                   </button>
//                 </li>
//               ))
//             : null}
//         </ul>
//       </div>
//     </>
//   );
// };
// export default Dashboard;

//truffle migrate  --network ganache
// nvm use 18
// npm start
