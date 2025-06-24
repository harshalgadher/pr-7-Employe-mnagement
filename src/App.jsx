import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import 'remixicon/fonts/remixicon.css'
import Home from "./pages/Home"
import About from "./pages/About"
import ContactEmp from "./pages/ContactEmp"
import Employe from "./pages/Employe"
import Header from "./components/Header"
import LogIn from "./pages/LogIn"
import { ToastContainer } from "react-toastify"
import { useEffect, useState } from "react"
import AddEmploye from "./pages/AddEmploye";
import ProtectedRoute from "./components/ProtectedRoute";


const App = () => {

  const [islogedIn, setIslogedIn] = useState(false);

  useEffect(()=>{
    let loginStatus = JSON.parse(localStorage.getItem("islogedIn")) || false
    setIslogedIn(loginStatus)
  },[])


  return (
    <BrowserRouter>
      <ToastContainer />  
      <Header islogedIn={islogedIn} setIslogedIn={setIslogedIn}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<ContactEmp />} />
        <Route path="/login" element={<LogIn setIslogedIn={setIslogedIn} />} />
        <Route path="/employe" element={<ProtectedRoute islogedIn={islogedIn} Component={Employe}/>} />
        <Route path="/addEmploye" element={<ProtectedRoute islogedIn={islogedIn} Component={AddEmploye} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App