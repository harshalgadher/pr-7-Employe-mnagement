import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Header = ({islogedIn , setIslogedIn}) => {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  // const [manu ,setmanu] = useState(false)

  const handleClick =()=>{
    setIslogedIn(false)
    localStorage.setItem("islogedIn",JSON.stringify(false))
    console.log(islogedIn);

    navigate('/')
    
    toast.success("Logged Out successfully...")
  }

  return (
    <div>
      <nav className="bg-whit  borderss pb-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
           
            <span className="self-center text-3xl font-bold whitespace-nowrap text-emerald-600"><i className="ri-group-fill"></i> Employees..</span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
              <li>
                <Link to={"/"} className={`${pathname == '/' ? "block font-bold text-lg transition-all duration-100 text-emerald-600 hover:text-black rounded-sm" : "block  font-bold text-lg text-slate-700"}`} >Home</Link>
              </li>
              <li>
                <Link to={"/about"} className={`${pathname == '/about' ? "block font-bold text-lg transition-all duration-100 text-emerald-600 hover:text-black rounded-sm" : "block  font-bold text-lg text-slate-700"}`}>About</Link>
              </li>
              <li>
                <Link to={"/review"} className={`${pathname == '/review' ? "block font-bold text-lg transition-all duration-100 text-emerald-600 hover:text-black rounded-sm" : "block  font-bold text-lg text-slate-700"}`}>Review</Link>
              </li>
              {islogedIn && <li>
                <Link to={"/employe"} className={`${pathname == '/employe' || pathname == '/addEmploye' || pathname.includes("/editEmployee") ? "block font-bold text-lg transition-all duration-100 text-emerald-600 hover:text-black rounded-sm" : "block  font-bold text-lg text-slate-700" }`}>employe</Link>
              </li>}
              
            </ul>
          </div>
         { islogedIn ? <button type="button" className="text-white bg-rose-600 hover:bg-rose-700  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center " onClick={handleClick}>Loged Out</button>
         :
          <button type="button" className="text-black font-bold bg-emerald-500 hover:bg-emerald-400 focus:outline-none rounded-lg text-sm px-4 py-2 text-center " onClick={() => navigate("/login")}>LOG IN</button>

         }
        </div>
      </nav>
    </div>
  )
}

export default Header