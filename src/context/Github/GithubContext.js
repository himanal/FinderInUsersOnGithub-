import {  createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

import axios from "axios";

const GithubContext = createContext()
 
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export const GithubProvider=({children})=>{

   const initialState ={
       users :[],
       Loading:true
   }

   const [ state ,dispatch]= useReducer(GithubReducer,initialState)

    const fetchData=async()=>{
        console.log("log")
        const respone= await axios.get(`${GITHUB_URL}users`,{ 
            headers:{
                Authorization: `token${GITHUB_TOKEN}`
            }
        })
    
         const data = await respone.data
       
            
     dispatch({
         type: 'GIT_USERS',
         payload: data,
     })
      console.log(data)
      
    }
    return <GithubContext.Provider value={{
        users: state.users,
        Loading: state.Loading,
        fetchData
         }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext 