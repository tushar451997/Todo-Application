import axios from "axios"
let url="https://react-app-722c0-default-rtdb.firebaseio.com";
export const getRequest =async()=>{
  let response= await axios.get(url+"/todo.json")
  return response.data;
}

export const Postrequest =(todotext)=>{
    axios.post(url+"/todo.json",todotext)
    getRequest()
}

export const Deleterequest =async(id)=>{
  await axios.delete(url+`/todo/${id}.json`)
  getRequest();
}

export const Editrequest = async(id,text)=>{
  await axios.put(url+`/todo/${id}.json`,text)
  getRequest()
}
// export const updateMovie1 = (id, updatedMovieData) => {
//   axios.put(`/movies/${id}.json`, updatedMovieData);
// };