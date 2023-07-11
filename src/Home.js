import React from "react";
import "./css/home.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#edfbfd" }}>
      <Navbar />
      <div className="container">
        <div className="content">
          <div className="left-side">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
              alt="Best Entrepreneur"
              className="entrepreneur-photo"
            />
            <h3 className="entrepreneur-text">
              If you're trying to create a company, it's like baking a cake. You
              have to have all the ingredients in the right proportion.
            </h3>
          </div>
          <div className="right-side">
            <h1 className="title">Home page</h1>
            <div style={{ paddingLeft: "42%" }}>
              <Link to="/login" className="link">
                Login
              </Link>
            </div>

            <p>
              Young entrepreneurs with innovative ideas often face challenges in
              securing funding due to a lack of capital and limited experience.
              Venture capitalists and other potential investors may be hesitant
              to invest in start-ups without sufficient evidence of the
              founder's ability to succeed. This paper presents a solution to
              this problem by designing and implementing a platform that allows
              users to collect points from their friends based on positive
              experiences. By using this platform, entrepreneurs can demonstrate
              their trustworthiness and resourcefulness to potential investors.
            </p>
            <br />
            <p>
              The world today is full of young entrepreneurs with brilliant
              ideas to change the world for the better. However, they often face
              a common problem - a lack of capital to turn their ideas into
              reality. Venture capitalists and potential investors may be
              hesitant to finance a start-up without sufficient evidence of the
              founder's ability to succeed. This is where the proposed platform
              comes in, aiming to provide a solution to this problem by
              incentivizing positive social interactions among friends.
            </p>
            <br />
            <p>
              The platform is designed to allow users to collect points from
              their friends based on positive experiences such as support,
              gratitude, and empathy. By using this platform, entrepreneurs can
              demonstrate their trustworthiness and resourcefulness to potential
              investors, and there is no need to dig into their social media
              profiles to find out what kind of person they are outside of work.
              The platform also offers a way for individuals to improve their
              social interactions and build stronger relationships with their
              friends.
            </p>
            <br />
            <p>
              The platform is based on a smart contract that runs on a
              blockchain network. Users need to create an account and link their
              wallet address to the platform. To earn points, users need to
              receive positive feedback from their friends through the platform.
              Friends can award points to each other by submitting a transaction
              on the blockchain network, and the smart contract ensures that
              each transaction is valid and that points are awarded only to the
              intended recipient.
            </p>
            <br />
            <p>
              The implementation of the platform will use Solidity, a
              programming language for smart contracts on the Ethereum
              blockchain network. The front-end interface will be developed
              using React, a popular JavaScript library. Users will be able to
              create an account, link their wallet address, and view their point
              balance on the platform. Friends will be able to award points to
              each other by selecting the recipient and entering the number of
              points to be awarded.
            </p>
            <br />
            <p>
              The success of the platform depends on user adoption and the
              willingness of friends to award points to each other. However, the
              platform offers a unique way for young entrepreneurs to
              demonstrate their trustworthiness and resourcefulness to potential
              investors, and it could also be used by individuals who wish to
              improve their social interactions and build stronger relationships
              with their friends. Further research and user testing are needed
              to evaluate the effectiveness of the platform in achieving its
              goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// const Home = () => {
//   return (
//     <div className="container">
//       <div className="header">
//         <h1 className="title">Home page</h1>
//         <Link to="/login" className="link">
//           Login
//         </Link>
//       </div>
//       <div className="content">
//         <p>
//           Young entrepreneurs with innovative ideas often face challenges in
//           securing funding due to a lack of capital and limited experience.
//           Venture capitalists and other potential investors may be hesitant to
//           invest in start-ups without sufficient evidence of the founder's
//           ability to succeed. This paper presents a solution to this problem by
//           designing and implementing a platform that allows users to collect
//           points from their friends based on positive experiences. By using this
//           platform, entrepreneurs can demonstrate their trustworthiness and
//           resourcefulness to potential investors.
//         </p>
// <br />
// <p>
//   The world today is full of young entrepreneurs with brilliant ideas to
//   change the world for the better. However, they often face a common
//   problem - a lack of capital to turn their ideas into reality. Venture
//   capitalists and potential investors may be hesitant to finance a
//   start-up without sufficient evidence of the founder's ability to
//   succeed. This is where the proposed platform comes in, aiming to
//   provide a solution to this problem by incentivizing positive social
//   interactions among friends.
// </p>
// <br />
// <p>
//   The platform is designed to allow users to collect points from their
//   friends based on positive experiences such as support, gratitude, and
//   empathy. By using this platform, entrepreneurs can demonstrate their
//   trustworthiness and resourcefulness to potential investors, and there
//   is no need to dig into their social media profiles to find out what
//   kind of person they are outside of work. The platform also offers a
//   way for individuals to improve their social interactions and build
//   stronger relationships with their friends.
// </p>
// <br />
// <p>
//   The platform is based on a smart contract that runs on a blockchain
//   network. Users need to create an account and link their wallet address
//   to the platform. To earn points, users need to receive positive
//   feedback from their friends through the platform. Friends can award
//   points to each other by submitting a transaction on the blockchain
//   network, and the smart contract ensures that each transaction is valid
//   and that points are awarded only to the intended recipient.
// </p>
// <br />
// <p>
//   The implementation of the platform will use Solidity, a programming
//   language for smart contracts on the Ethereum blockchain network. The
//   front-end interface will be developed using React, a popular
//   JavaScript library. Users will be able to create an account, link
//   their wallet address, and view their point balance on the platform.
//   Friends will be able to award points to each other by selecting the
//   recipient and entering the number of points to be awarded.
// </p>
// <br />
// <p>
//   The success of the platform depends on user adoption and the
//   willingness of friends to award points to each other. However, the
//   platform offers a unique way for young entrepreneurs to demonstrate
//   their trustworthiness and resourcefulness to potential investors, and
//   it could also be used by individuals who wish to improve their social
//   interactions and build stronger relationships with their friends.
//   Further research and user testing are needed to evaluate the
//   effectiveness of the platform in achieving its goals.
// </p>
//       </div>
//     </div>
//   );
// };

export default Home;
