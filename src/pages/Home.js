import React from "react";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My This is Rachel</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, NPM,
              Ionic, BootStrap, Yarn
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;