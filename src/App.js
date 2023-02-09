import React from "react";
import './App.css'
import Transaction from "./components/Transaction";
import FormCompoent from "./components/FromCompoments";
import { useState } from "react";

const design = {color:'red',textAlign:'center',fontSize:'1.5rem'}


function App() {
 
  const [item,setItems] = useState([])
  const onAddNewItem = (newItem) =>{
    //prevItem = initData
    setItems((prevItem)=>{
      return[newItem,...prevItem]
    })
  }
  return (
    <div className="container">
    <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
    <FormCompoent onAddItem={onAddNewItem}/>
    <Transaction items = {item}/>
</div> 
  ); 
}

export default App;