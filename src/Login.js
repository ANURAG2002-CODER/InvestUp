import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import Award from "./contracts/Award.json";
import "./css/login.css";

const Login = ({ setResponse }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState("");
  const [entrepreneurs, setEntrepreneurs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      try {
        const ganacheProvider = new Web3.providers.HttpProvider(
          "http://127.0.0.1:8545"
        );
        const web3Instance = new Web3(ganacheProvider);
        const networkId = await web3Instance.eth.net.getId();
        const deployedNetwork = Award.networks[networkId];
        const awardContract = new web3Instance.eth.Contract(
          Award.abi,
          deployedNetwork && deployedNetwork.address
        );
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

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      setAccount(account);
      if (
        password ===
        "password" /*&& entrepreneurs.find(obj=>obj.account===account)!==undefined*/
      ) {
        setResponse(account);
        navigate("../dashboard");
      } else {
        window.alert("Invalid password");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <label>
        Address: {"\t\t"}
        <input
          type="text"
          value={account}
          onChange={(event) => setAccount(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password: {"\t\t"}
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit" className="login-button">
        Login
      </button>
    </form>
  );
};

export default Login;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Web3 from "web3";
// import Award from "./contracts/Award.json";

// const Login = ({ setResponse }) => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [password, setPassword] = useState("");
//   const [account, setAccount] = useState("");
//   const [entrepreneurs, setEntrepreneurs] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const init = async () => {
//       try {
//         const ganacheProvider = new Web3.providers.HttpProvider(
//           "http://127.0.0.1:8545"
//         );
//         const web3Instance = new Web3(ganacheProvider);
//         const networkId = await web3Instance.eth.net.getId();
//         const deployedNetwork = Award.networks[networkId];
//         const awardContract = new web3Instance.eth.Contract(
//           Award.abi,
//           deployedNetwork && deployedNetwork.address
//         );
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

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     try {
//       setAccount(account);
//       if (
//         password ===
//         "password" /*&& entrepreneurs.find(obj=>obj.account===account)!==undefined*/
//       ) {
//         setResponse(account);
//         navigate("../dashboard");
//       } else {
//         window.alert("Invalid password");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return (
//     <form
//       onSubmit={handleLogin}
//       style={{ textAlign: "center", marginTop: "20%" }}
//     >
//       <label>
//         Address :
//         <input
//           type="text"
//           value={account}
//           onChange={(event) => setAccount(event.target.value)}
//         />
//       </label>
//       <br></br>
//       <br></br>
//       <label>
//         Password :
//         <input
//           type="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//       </label>
//       <br />
//       <br />
//       <button
//         type="submit"
//         value="submit"
//         style={{ fontSize: "20px", cursor: "pointer" }}
//       >
//         Login
//       </button>
//     </form>
//   );
// };
// export default Login;
