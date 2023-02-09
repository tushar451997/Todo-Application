import { useContext, useState } from "react";
import { context } from "../ContextApi/Contextapi";
import style from "./Editform.module.css"

const Editform = ({task,duedate,id})=>{
    console.log(task)
    let dataobj={
        todotask:task,
        duedate:duedate,
        editstatus:true,
    }
    const[text,setText]=useState(dataobj)
    const ctx =useContext(context)
    
    const handleEditsubmit=(event)=>{
        event.preventDefault();
        ctx.handleUpdate(text,id);
    }
    
    const handleEditchange = (event) =>{
           if(text.todotask.trim()!==""&&text.duedate.trim()!==""){
            
            setText({...text,[event.target.name]:event.target.value})

           }
           else{
            alert("Fill all input field")
           }
    }

    return(
        <form className={style.form} onSubmit={handleEditsubmit}>
             
                <input name="todotask" onChange={handleEditchange} value={text.todotask} type={"text"}/>
             
                <input name="duedate" onChange={handleEditchange} value={text.duedate} type={"date"}/>
             
                <button type="submit" >Update</button>
            
        </form>
    )
}
export default Editform;