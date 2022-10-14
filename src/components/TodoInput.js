import { useState } from "react"
import './style.css'


export default function TodoInput({store,setstore}){
   
    const [write,setwrite]=useState("")
    return (
       <div className="inputContainer">
        <input onChange={(e)=>{setwrite(e.target.value)}} value={write} type="text" name="todo" id="todo" />
        <button onClick={()=>{
            write.trim('')===''?console.log("sabina"):setstore([...store,write])
            // trim le space wala lai hatauxa ani tya khali hunxa ani accept gardaina
            
            setwrite("") //input clear garnako lagi
        }}
        
            >TODO</button>
       </div>
    )
}