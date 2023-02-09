import { useContext } from "react";
import { context } from "../ContextApi/Contextapi";
import Deletebutton from "../Deletebutton/Deletebutton";
import Editbutton from "../Editbutton/Editbutton";
import style from "./appendata.module.css"
const Appendtodo = () =>{
    const ctx=useContext(context);
  let data=ctx.tododata;
 
 
    let output;
    if(data.length>0){
        let count=0;
       output= data.map((elem)=>{
        count++;
            return(
                <div className={style.outercontainer}  key={elem.id}>
                   <div className={style.singlediv}>
                   <div className={style.number}>
                   <p>{count}</p>
                   </div>
                   <div>
                   <p className={style.task}>{elem.todotask}</p>
                   </div>
                   <div>
                   <p>{elem.duedate}</p>
                   </div>
                    
                    <div>
                    <Deletebutton id={elem.id}/>
                    </div>

                   </div>

                    <div>
                     <Editbutton id={elem.id} editstatus={elem.editstatus} task={elem.todotask} duedate={elem.duedate}/>
                    </div>
                </div>
            )
        })
    }
    else{
        output="No Data Found"
    }
    return(
        <div className={style.container}>
 {output}
        </div>
    )
}
export default Appendtodo;