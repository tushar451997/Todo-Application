import { useContext } from "react"
import { context } from "../ContextApi/Contextapi"

const Deletebutton = ({id}) =>{
    const ctx =useContext(context)
    const{handleDeleteTodo}={...ctx}
    const deleteTodo=()=>{
        handleDeleteTodo(id)
    }
    return(
        <div>
                 
            <button onClick={deleteTodo} className="deletebtn">Delete</button>
        </div>
    )
}

export default Deletebutton