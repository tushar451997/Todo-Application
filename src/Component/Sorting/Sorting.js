import { useContext } from "react"
import { context } from "../ContextApi/Contextapi"
import "./Sorting.css"
const Sorting =()=>{

    const ctx= useContext(context)
    let tododata=ctx.tododata;
    const handleSortingfn =(event)=>{
let data;
 
if(event.target.value==="initial"){
    data=ctx.tododata
}
      if(event.target.value==="asendingtask"){
             data=     tododata.sort((a,b)=>{
                    if(a.todotask>b.todotask){
                        return 1;
                    }
                    if(a.todotask<b.todotask){
                        return -1;
                    }
                    else{
                        return 0;
                    }
                 })
      }
      if(event.target.value==="desendingtask"){
        data=     tododata.sort((a,b)=>{
            if(a.todotask<b.todotask){
                return 1;
            }
            if(a.todotask>b.todotask){
                return -1;
            }
            else{
                return 0;
            }
         })
      }
     
   
     
      ctx.handleSort(data)

    }

    return(
        <div className="select">
            <select onChange={handleSortingfn}>
                <option value={"initial"}>Sort</option>
                <option value={"asendingtask"}>Sort by Todotask In Ascending order</option>
                <option value={"desendingtask"}>Sort by Todotask In Descending order</option>
            </select>
        </div>
    )
}
export default Sorting;