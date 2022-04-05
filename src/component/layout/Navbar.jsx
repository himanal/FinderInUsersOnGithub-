// ICONS
import { AiFillGithub } from "react-icons/ai";

// Dependencies
import  propTypes  from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({title}) => {
  return (
    <nav className="h-12  bg-slate-800   ">
      <div className="flex justify-between">
     
     <div className="flex justify-start  p-2 mx-12" >

       <AiFillGithub className="text-3xl text-amber-200 "/>
       <Link to='/' className="text-amber-200  m-1"> {title} </Link>

     </div>
        <div className="btn text-sm  pt-4 px-8">
          <Link to="/"  className=" text-amber-200 duration-300 hover:ring-1 hover:ring-amber-200 p-1 m-1 rounded ">Home </Link>
          <Link to="/about"  className=" text-amber-200  duration-300 hover:ring-1 hover:ring-amber-200 p-1 m-1 rounded ">about </Link>
        </div>
       
      </div>
    </nav>
  )
}


Navbar.defaultProps={
  title : ' Github User Finder'
}

Navbar.propTypes={
  title : propTypes.string  ,
}
export default Navbar