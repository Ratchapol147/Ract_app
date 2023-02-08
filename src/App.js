import React from "react";
import './App.css'
import Transaction from "./components/Transaction";
import FormCompoent from "./components/FromCompoments";
import { useState } from "react";

const design = {color:'red',textAlign:'center',fontSize:'1.5rem'}


function App() {
  const initData =[
    {id:1,title:'เงินเดือน',amount:500},
    {id:2,title:'เงินเดือน',amount:50000},
    {id:3,title:'ค่าเดินทาง',amount:500},

  ]
  const [item,setItems] = useState(initData)
  const onAddNewItem = (newItem) =>{
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