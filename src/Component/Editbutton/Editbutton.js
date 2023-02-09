import { useContext } from "react"
import { context } from "../ContextApi/Contextapi"
import Editform from "../Editform/Editform";


const Editbutton = ({id,editstatus,task,duedate}) =>{
    const ctx= useContext(context);
    
    

    const handleOpenedit =(event)=>{
        event.preventDefault()
        ctx.handleEdit(id)
    }
    return(
        <div>
            {
               editstatus ? 
               (<button onClick={handleOpenedit}  className="editbtn">Edit</button>):(<Editform id={id}  task={task} duedate={duedate}/>)
            }
        </div>
    )
}

export default Editbutton