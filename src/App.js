// Dependencies
import { BrowserRouter as Router, Route } from "react-router-dom"

// component
import  Navbar  from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";


function App() {
  return (
    <Router>
      <div className=" flex flex-col   h-screen ">

      <Navbar/>
      
      <Footer/>
      
      
      </div>
    </Router>
  );
}

export default App;
