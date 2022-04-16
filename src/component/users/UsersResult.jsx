
// dependencies

// hooks
import {   useContext} from "react"
import GithubContext from "../../context/Github/GithubContext"
// components
import UserList from "./UserList"

function UsersResult({children}) {

    const {users,Loading} =useContext(GithubContext)

 

    
    if(!Loading){
      return (
      
        <div className=" grid grid-cols-5  w-[100vw-5%]  text-xl gap-3 overflow-scroll  ">{users.map((user)=>(
          <h3 className="ring-2 p-2 h-24 rounded duration-500 shadow-lg mb-12 shadow-slate-500 delay-300 m-2 hover:scale-110">
           <UserList key={user.id} user={user}/>
          </h3>
        ))}</div>
      )
    }else{
      return <h3 className="text-2xl flex justify-center  h-screen text-red-800">Loading...</h3>
    }
}

export default UsersResult