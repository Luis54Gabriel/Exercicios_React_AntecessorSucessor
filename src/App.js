import React from 'react';
import './App.css';

var operacao = parseInt(prompt("Digite 1 para ANTECESSOR ou 2 para SUCESSOR"));
var num01 = parseInt(prompt("Digite um valor:"));

function antecessor() {
  return num01-1;
}

function sucessor() {
  return num01+1;
}

function App() {
  if(operacao===1){
    return (
      <div className="App">
          <p>O antecessor é: {antecessor()}</p>
        </div>
    );
  }else if (operacao===2) {
    return (
      <div className="App">
          <p>O sucessor é: {sucessor()}</p>
        </div>
    );
  };
}
export default App;
