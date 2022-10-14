import { useState } from "react"

export default function DisplayTodo({store,setstore}){
//  const [delete,setdelete]=useState()

    
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
            {store.map(todo =>{
                return(
                    <div className="wrapper" key={Math.random()}>
                    <div className="keyname" >
                       <p>{todo}</p> 
                    </div>
                    <div className="close ">
                        < img src="/close.png" height='20px'onClick={(e)=>DeleteTodo(e)}/>
                    </div>
                    </div>
                )
            })}

        </div>
    )
}