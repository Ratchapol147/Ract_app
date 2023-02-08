import { useState } from 'react'
import './FromCompoment.css'
import { v4 as uuidv4 } from 'uuid'

const FormCompoent = ({onAddItem})=>{
    const [title,settitle] = useState('')
    const [amount,setamount] = useState()

    const inputtitle =(event)=>{
        settitle(event.target.value)
    }
    const inputamount =(event) =>{
        setamount(event.target.value)
    }
    const saveItem = (event)=>{
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        
        onAddItem(itemData)
        settitle('')
        setamount(0)
    }
    return(
        <div>
            <form onSubmit={saveItem}>
                <div className ='form-control'>
                    <label>ชื่อรายการ</label>
                    <input type='text' placeholder="ระบุชื่อราการ" onChange={inputtitle} value={title}></input>
                </div>
                <div className ='form-control'>
                    <label>จำนวนเงิน</label>
                    <input type='number' placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputamount} value={amount}></input>
                </div>
                <div >
                    <button type="Submit" className='btn'>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}
export default FormCompoent