import {  createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

import axios from "axios";

const GithubContext = createContext()
 
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export const GithubProvider=({children})=>{

   const initialState ={
       users :[],
       Loading:false
   }

   const clearData=()=>{
       dispatch({
           type:"DELETE_DATA"
       })
   }

   const [ state ,dispatch]= useReducer(GithubReducer,initialState)

    const searchData=async(text)=>{
        setLoading()

        const params =new URLSearchParams({
            q:text
        })
        console.log("log")
        const respone= await axios.get(`${GITHUB_URL}search/users?${params}`,{ 
            headers:{
                Authorization: `token${GITHUB_TOKEN}`
            }
        })
    
         const {items} = await respone.data
       
            
     dispatch({
         type: 'GIT_USERS',
         payload: items,
     })
     
      
    }

    const setLoading = ()=> dispatch({
        type:"GET_LOADING"
    })
    return <GithubContext.Provider value={{
        users: state.users,
        Loading: state.Loading,
        searchData,
        clearData
         }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext 