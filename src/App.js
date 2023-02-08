import React from "react";
import './App.css'
import Transaction from "./components/Transaction";


const design = {color:'red',textAlign:'center',fontSize:'1.5rem'}


function App() {
  return (
    <>
      <article className='container'>
        <h1 style={design}>โปรแกรมบัญรายรับ - รายจ่าย</h1>
        <Transaction/>
        <p>5.30</p>
      </article>
    </>
  ); 
}

export default App;