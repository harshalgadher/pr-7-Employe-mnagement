import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const LogIn = ({setIslogedIn}) => {

    const [input, setInput] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setInput({...input,[e.target.id]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(input.email.trim() === "" && input.password.trim() === ""){
            toast.warning("Please Enter Email or password....")
        }
        if(input.email == "admin@gmail.com" && input.password == "admin123"){
            toast.success("Loged in Successfully...");
            setIslogedIn(true)
            localStorage.setItem("islogedIn",JSON.stringify(true))
            navigate("/")
        }else{
            toast.error("invalid Email or password...")
        }
        
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[90vh] lg:py-0">
            <div className="w-full bg-white rounded-lg shadow-lg border-2  md:mt-0 sm:max-w-md xl:p-0 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-emerald-600">
                        LOG IN
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="font-bold block mb-2 text-sm  text-gray-900">Your email</label>
                            <input type="email" onChange={handleChange} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 " placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label htmlFor="password" className="font-bold block mb-2 text-sm  text-gray-900 ">Password</label>
                            <input type="password" onChange={handleChange} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500  block w-full p-2.5 " required="" />
                        </div>

                        <button type="submit" className="w-full text-white bg-emerald-500 transition-all duration-300 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Log In</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn