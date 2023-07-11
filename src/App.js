import React,{useState} from 'react';
import Home from './Home.js';
import Login from './Login.js';
import Dashboard from './Dashboard.js';
import { Route ,Routes} from 'react-router-dom';


export default function App(){
    const [response, setResponse] = useState("");
//   const [password, setPassword] = useState("");
//   const [account, setAccount] = useState('');
//   const [contract, setContract] = useState(null);
//   const [entrepreneurs, setEntrepreneurs] = useState([]);
//   const [name, setName] = useState("");
//   useEffect(()=>{
//     const init = async () => {
//       try {
//         const ganacheProvider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
//         const web3Instance = new Web3(ganacheProvider);

//         const chainId = await web3Instance.eth.getChainId();
//         console.log("Chain Id: " , chainId);

//         const accounts= await web3Instance.eth.getAccounts();
//         console.log("Accounts: " , accounts);
        
//         const networkId = await web3Instance.eth.net.getId();
//         const deployedNetwork = Award.networks[networkId];
//         const awardContract= new web3Instance.eth.Contract(
//           Award.abi,
//           deployedNetwork && deployedNetwork.address,
//         );
//         setContract(awardContract);
//       }
//       catch(error) {
//         console.log(error);
//       }
//     };
//     init();
//   },[]);

    // const handleLogin = async (event) => {
    //     event.preventDefault();
    //     try {
            
    //         setAccount(account);
    //         if(password==="password") {
    //             return (
    //                 <a href={Dashboard}></a>
    //               );
    //         }
            
    //     } catch (err) {
    //         console.error(err);
    //     };
    // };

    // const handleAddEntrepreneur = async (name) => {
    //     // Call the createEntrepreneur function on the TrustPoints contract
    //     await contract.methods.createEntrepreneur(name).send({ from: account });
    // };

    // const handleEndorsement = async (entrepreneur) => {
    //     try {
    //       await contract.awardPoints(entrepreneur.account);
    //       setEntrepreneurs(await contract.getEntrepreneurs());
    //     } catch (err) {
    //       console.error(err);
    //     }
    // };
    // const renderLogin = () => {
    // return (
    //     <form onSubmit={handleLogin}>
    //     <label>
    //       Address:
    //       <input
    //         type="text"
    //         value={account}
    //         onChange={(event) => setAccount(event.target.value)}
    //       />
    //     </label>
    //     <br />
    //     <label>
    //       Password:
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(event) => setPassword(event.target.value)}
    //       />
    //     </label>
    //     <br />
    //     <input type="submit" value="Submit" />
    //   </form>
    // );
    // };

    // const renderDashboard = (account) => {
    //     return (
    //       <>
    //         <h2>Welcome, {account}!</h2>
    //         <h3>Entrepreneurs</h3>
    //         <ul>
    //           {entrepreneurs.map((entrepreneur) => (
    //             <li key={entrepreneur.account}>
    //               {entrepreneur.name} - {entrepreneur.points} points
    //               <button onClick={() => handleEndorsement(entrepreneur)}>
    //                 Endorse
    //               </button>
    //             </li>
    //           ))}
    //         </ul>
    //         <p>Become an Entrepreneur</p>
    //         <p>Enter your name: 
    //             <input type="text"
    //             value={name}
    //             onChange={(event) => setName(event.target.value)}
    //             />
    //         </p>
    //         <button onClick={() => handleAddEntrepreneur(name)}>Submit</button>
    //         </>
    //     );
    // };


    // const app = ReactDOM.createRoot(document.getElementById('root'));
    // app.render(  
    //     <StrictMode>
    //         <BrowserRouter history={browserHistory}>
    //             <Routes>
    //                 <Route path={"login"} component={Login}></Route>
    //                 <Route path={"dashboard"} component={Dashboard}></Route>
    //             </Routes>
    //         </BrowserRouter>  
    //     </StrictMode>  
    // );
    return (
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="login" element={<Login setResponse={setResponse}/>} />
            <Route path="dashboard" element={<Dashboard response={response}/>} />
          </Routes>
        </div>
    );
}
