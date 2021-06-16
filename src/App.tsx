import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

const Moralis = require('moralis');
Moralis.initialize("L6PlSf2m6DLpoOCUxMF5j91SwQW8GdGxgKUQ1J8q");
Moralis.serverURL = 'https://2hyv9t6h0t95.moralis.io:2053/server'



const loginWithMetamaskHandler = () => {
  Moralis.Web3.authenticate().then(function (user: any) {
    console.log(user.get('ethAddress'))
  })
}

function App() {
  return (
    <div className="App">
      <Button variant="primary">Login with MetaMask</Button>
      <Button variant="danger">Logout</Button>
    </div>
  );
}

export default App;
