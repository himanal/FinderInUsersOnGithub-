import {  createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

import axios from "axios";

const GithubContext = createContext()
 
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export const GithubProvider=({children})=>{

   const initialState ={
       users :[],
       user:{},
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

    const getUser=async(login)=>{
        setLoading()
        const respone= await axios.get(`${GITHUB_URL}users/${login}`,{ 
                // headers:{
                    
                //     'Authorization': `token${GITHUB_TOKEN}`
                // }
        })
         const data = await respone.data
      console.log(data)
     dispatch({
         type: 'GET_USER',
         payload: data,
     })
    }

    const setLoading = ()=> dispatch({
        type:"GET_LOADING"
    })
    return <GithubContext.Provider value={{
        users: state.users,
        Loading: state.Loading,
        user: state.user,
        searchData,
        getUser,
        clearData
         }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext 