// Dependencies
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GithubProvider } from "./context/Github/GithubContext";

// component
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { AlertContextProvider } from "./context/alret/AlertContext";
import Alert from "./component/layout/Alert";

function App() {
  return (
    <GithubProvider>
      <AlertContextProvider>
        <Router>
          <div className=" flex flex-col bg-slate-600    ">
            <Navbar />
            <main className="  my-auto px-2">
              
            <Alert/>
              <Routes>
                <Route path="/"  element={<Home /> } />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertContextProvider>
    </GithubProvider>
  );
}

export default App;
