import React from "react";
import './App.css'
import Transaction from "./components/Transaction";
import FormCompoent from "./components/FromCompoments";
import DataContext from "./data/DataContext";
import { useState,useEffect } from "react";
// import { useReducer } from "react";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
                        //                     ^^ tag = <a>


const design = {color:'red',textAlign:'center',fontSize:'1.5rem'}


function App() {
  
  const [item,setItems] = useState([])

  const [reportIncome,setreportIncome] = useState(0)
  const [reportExpense,setreportExpense] = useState(0)
  const onAddNewItem = (newItem) =>{

  
    //prevItem = initData
    setItems((prevItem)=>{
      return[newItem,...prevItem]
    })
  }
  useEffect(()=>{
    const amount = item.map(item=>item.amount)
    //                                                vv รวมใน Array
    const income = amount.filter(element=>element>0).reduce((total,element)=>total=total+element,0)
    const expense = (amount.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
    setreportIncome(income.toFixed(2))
    setreportExpense(expense.toFixed(2))
  },[item,reportIncome,reportExpense])


  //reducer state
  // const [showReport,setshowReport] = useState(false)
  // const reducer = (state,action)=>{
  //   // eslint-disable-next-line default-case
  //   switch(action.type){
  //     case 'SHOW':
  //       return setshowReport(true)
  //     case 'HIDE':
  //       return setshowReport(false)
  //   }
  // }
  // const [result,dispatch] = useReducer(reducer,showReport)
  return (
    <DataContext.Provider value={{income:reportIncome,expense:reportExpense}}>
      <div className="container">
          <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
          <Router>
         <div>
            <ul className="horizontal-menu">
              <li >
                <Link to='/'>ข้อมูลบัญชี</Link>
              </li>
              <li >
                <Link to='/insert'>บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" element={<ReportComponent />} />
              <Route path="/insert" 
                              element={
                                      <div>
                                          <FormCompoent onAddItem={onAddNewItem} />
                                          <Transaction items={item} />
                                      </div>}
                                      />
            </Routes>
          </div>
         </Router>
          {/* {showReport && <ReportComponent/>} */}
          

          {/* <h1>{result}</h1>
          <button onClick={()=>dispatch({type:'SHOW'})}>แสดง</button>
          <button onClick={()=>dispatch({type:'HIDE'})}>ซ่อน</button> */}
      </div> 
    </DataContext.Provider>
   
  ); 
}

export default App;