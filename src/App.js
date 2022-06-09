import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <MyInfo />
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const MyInfo = () => {
  const [myName, setMyName] = useState('')
  const [myColor, setMyColor] = useState("")
  const myMovies = ['Lion King ', 'Spiderman NWH', " Moana"
]
  return (
    <div>
      <p>{myName}</p>
      <button>
        +
      </button>
      <p style = {{ backgroundColor: myColor}}>{myColor} </p> <input
        type="text"
        onChange={(event) => {
          const value = event.target.value;
          setMyColor(value);
        }}
      ></input>
      <ul>
        {myMovies.map((element, index) =>{
          return <li key={`${element}-${index}`}>{element}</li>;
        })}
        </ul>
      
      {/* <p>I am {myAge} years old</p> */}
      <button
        // onClick={() => {
        //   setMyAge(myAge + 1);
        //   console.log(myAge);
        // }}
      >
        +
      </button>
     
         
      <input
        type="text"
        onChange={(event) => {
          const value = event.target.value;
          setMyName(value);
        }}
        ></input>
      <p></p>
    
    </div>
  );
}

export default App;
