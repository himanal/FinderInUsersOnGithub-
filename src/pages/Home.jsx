// componenet
import UserSreach from "../component/users/UserSearch"
import UsersResult from "../component/users/UsersResult"
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
function Home() {
  return (

    <div className=" h-screen" >
 <UserSreach/>
   <UsersResult/>
      
      
    </div>
  )
}

export default Home