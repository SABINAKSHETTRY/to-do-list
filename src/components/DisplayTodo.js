import { useState,useEffect } from "react"
import axios from 'axios'
export default function DisplayTodo({store,setstore}){

    const [dummy,setdummy]=useState(false)

   async function deletedata(e){
    await axios.delete(`https://todoapi-wheat.vercel.app/deletetodo/${e.target.id}`)
    setdummy(!dummy)
    }

//  const [delete,setdelete]=useState()
const [hold,sethold]=useState([])

async function getTodo(){
 let data=await axios.get("https://todoapi-wheat.vercel.app/gettodo")
 console.log(data.data)
 sethold(data.data)
}


useEffect(()=>{
getTodo()
console.log(hold)
},[dummy,store])
    
    function DeleteTodo(e){

        let newArray=[...store]
        let todelete=e.target.parentElement.previousElementSibling.firstElementChild.textContent
        let filteredArray= newArray.filter((todo)=>{
            return todo!==todelete
        })
        setstore([...filteredArray])

    }
    return(

        <div className="display">
            {hold.map((dataobject) =>{
                return(
                    <div className="wrapper" key={Math.random()}>
                    <div className="keyname" >
                       <p>{dataobject.todo}</p> 
                    </div>
                    <div className="close ">
                        < img id={dataobject._id} src="/close.png" height='20px'onClick={(e)=>deletedata(e)}/>
                    </div>
                    </div>
                )
            })}

        </div>
    )
}