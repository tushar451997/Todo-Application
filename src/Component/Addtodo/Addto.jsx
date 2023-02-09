import { useContext } from "react";
import Appendtodo from "../Appendtodo/Appendtododata";
import { context } from "../ContextApi/Contextapi";
import Sorting from "../Sorting/Sorting";
import style from "./addtodo.module.css"
const Addtodo = ()=>{
    const ctx= useContext(context);
    const{handleChange,handleSubmit,todotext,handleBlur1,handleBlur2}={...ctx};
    let borderstyleip1=ctx.borderip1?style.redborder:style.blackborder;
    let borderstyleip2=ctx.borderip2?style.redborder:style.blackborder;
    let text1=ctx.borderip1?"Please enter Todo Task":"";
    let text2=ctx.borderip2?"Please enter Todo Duedate":"";
    return(
        <div>
                        <h1>Todo Application</h1>
           <form onSubmit={handleSubmit}>
            <div>
                <label>Todo Name</label>
                <input
                 className={`${borderstyleip1}`} 
                 name="todotask" 
                 value={todotext.todotask} 
                 onChange={handleChange} 
                 onBlur={handleBlur1}
                 type={"text"} 
                 placeholder="Enter Todo name"/>
                 <p className={`${style.textalert}`}>{text1}</p>
            </div>
            <div>
                <label>Select Due Date</label>
                <input 
                 className={`${borderstyleip2}`} 
                name="duedate" 
                value={todotext.duedate}  
                onChange={handleChange}
                onBlur={handleBlur2} 
                type={"date"}/>
                <p className={`${style.textalert}`}>{text2}</p>
            </div>
            <div>
                <button type="submit">Add Todo</button>
            </div>
           </form>
           <Sorting/>

           <div >
           {
            ctx.isloading?
            <div className={style.appenddata}>
            <img src="https://miro.medium.com/max/946/1*QHTfTrNDMazdIE_KFwpMyA.gif"/>

            </div>
            :<Appendtodo/>
           }
           </div>
        </div>
    )
}
export default Addtodo;