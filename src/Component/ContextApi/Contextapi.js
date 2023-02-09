import React, { useEffect, useState } from "react";
import { Deleterequest, Editrequest, getRequest, Postrequest } from "../https/https";
export const context=React.createContext(null);
let dataobj={
    todotask:"",
    duedate:"",
    editstatus:true,
}
const Contextprovider =(props)=>{
const[todotext,settodoText]=useState(dataobj);
const[tododata,setData]=useState([]);
const[borderip1,setBorderip1]=useState(false)
const[borderip2,setBorderip2]=useState(false)
const[edit,setEdit]=useState(false);
const[isloading,setisLoading]=useState(false)
useEffect(()=>{
    fetchData()
    setisLoading(true)
 },[])

 


const fetchData= async()=>{
    let res = await getRequest();
    setisLoading(false)
    let resdata=[];
    let count=0;
    for(let key in res){
        count++;
     resdata.push({
         id:key,
         todotask:res[key].todotask,
         duedate:res[key].duedate,
         count:count,
         editstatus:true,
     })
    }
    setData(resdata)

}

const handleChange =(event)=>{
  settodoText({...todotext,[event.target.name]:event.target.value});
  todotext.todotask.trim().length>=0?setBorderip1(false):setBorderip1(true) 
   todotext.duedate.trim().length>=0?setBorderip2(false):setBorderip2(true) 
  

}

const handleSubmit =(event)=>{
   event.preventDefault();
   if(todotext.todotask.trim()!==""&&todotext.duedate.trim()!==""){
    Postrequest(todotext)
    fetchData()
  settodoText(dataobj)
  setBorderip1(false)
  setBorderip2(false)
  setisLoading(true)
   }
   else{
        setBorderip1(true);
        setBorderip2(true)

   }
}



const handleBlur1 = () =>{
     if(todotext.todotask.trim().length>0){
        setBorderip1(false)

     }
     else{
        setBorderip1(true)
     }
}
const handleBlur2 = () =>{
    if(todotext.duedate.trim()){
       setBorderip2(false)
       console.log(todotext)
    }
    else{
       setBorderip2(true)
    }
}

const handleDeleteTodo=(id)=>{
    setisLoading(true)
   Deleterequest(id);
   getRequest();
   fetchData();
}

const handleEdit =(id)=>{
    setData(tododata)
    for(let i=0;i<tododata.length;i++){
        if(id===tododata[i].id){
            tododata[i].editstatus=!tododata[i].editstatus;
        }
    }
    setEdit(!edit)
}

const handleUpdate=(text,id)=>{
    setisLoading(true)
  Editrequest(id,text)
  getRequest();
   fetchData();
}

const handleSort =(data)=>{
    setData([...data])
}




let data={
    handleChange:handleChange,
    handleSubmit:handleSubmit,
    handleBlur1:handleBlur1,
    handleBlur2:handleBlur2,
    handleDeleteTodo:handleDeleteTodo,
    handleEdit:handleEdit,
    handleUpdate:handleUpdate,
    handleSort:handleSort,
    edit:edit,
    todotext:todotext,
    tododata:tododata,
    isloading:isloading,
    borderip1:borderip1,
    borderip2:borderip2
}
    return(
        <context.Provider value={data}>
         {props.children}
    </context.Provider>
    )
}
export default Contextprovider;