import { useState } from "react"
import './style.css'
import axios from "axios"


export default function TodoInput({store,setstore}){
   async function addtodo(){
   await axios.post("https://todoapi-wheat.vercel.app/addtodo",{
        todo:write
 
    })
    setstore(!store)
   }
   
    const [write,setwrite]=useState("")
    return (
       <div className="inputContainer">
        <input onChange={(e)=>{setwrite(e.target.value)}} value={write} type="text" name="todo" id="todo" />
        <button onClick={()=>{
            addtodo()

            // write.trim('')===''?console.log("sabina"):setstore([...store,write])
            // trim le space wala lai hatauxa ani tya khali hunxa ani accept gardaina
            
            setwrite("") //input clear garnako lagi
        }}
        
            >TODO</button>
       </div>
    )
}