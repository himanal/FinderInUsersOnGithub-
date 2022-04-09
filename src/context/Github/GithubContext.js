import {  createContext, useState } from "react";
import axios from "axios";

const GithubContext = createContext()
 
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export const GithubProvider=({children})=>{

    const [users, setUsers]=useState([])
    const [Loading, setLoading]=useState(true)

    const fetchData=async()=>{
        console.log("log")
        const respone= await axios.get(`${GITHUB_URL}users`,{
            headers:{
                Authorization: `token${GITHUB_TOKEN}`
            }
        })
    
         const data = await respone.data
       
            
      setUsers(data)
      setLoading(false)
      console.log(data)
      
    }
    return <GithubContext.Provider value={{
        users,
        Loading,
        fetchData
         }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext 