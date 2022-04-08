
// dependencies
import axios from "axios"
// hooks
import { useEffect, useState } from "react"

function UsersResult() {

    const [users, setUsers]=useState([])
    const [Loading, setLoading]=useState(true)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        const respone= await axios.get(`${process.env.REACT_APP_GITHUB_URL}users`,{
            headers:{
                'Authorization': `token${process.env.REACT_APP_GITHUB_REACT_APP_GITHUB_TOKEN }`
            }
        })
    
         const data = await respone.data
       
            
      setUsers(data)
      setLoading(false)
      console.log(data)
    }

    if(!Loading){


      return (
      
        <div className="h-[100vh] grid grid-cols-4 w-[100vw-5%] text-xl gap-4 m-auto">{users.map((user)=>(
          <h3 className="ring-2 p-2 rounded duration-300 shadow-lg m-2 hover:scale-110">
            {user.login}
          </h3>
        ))}</div>
      )
    }else{
      return <h3 className="text-2xl flex justify-center text-red-800">Loading...</h3>
    }
}

export default UsersResult