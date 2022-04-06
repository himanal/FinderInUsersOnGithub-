// Dependencies
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"

// component
import  Navbar  from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <div className=" flex flex-col bg-slate-600   h-screen ">

      <Navbar/>
      <main className="   my-auto px-2">

      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/about" element={  <About/>}/>
        <Route path="/*" element={  <NotFound/>}/>
      </Routes>
      </main>
     
     
     
      <Footer/>
      
      
      </div>
    </Router>
  );
}

export default App;
