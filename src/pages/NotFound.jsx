// dependencies
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div className=" flex flex-col justify-center items-center ">
        <h1 className="text-4xl text-red-500"> ooops</h1>
        <h2 className="text-2xl text-red-500">404 error - page not found!!</h2>
        <Link to="/" >
            <button className="w-36 h-8 bg-blue-500 hover:bg-blue-700 mt-6 ring1 rounded" >
                Back To Home
            </button>

        </Link>

        </div>
  )
}

export default NotFound