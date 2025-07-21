import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate()

    async function handleLogin() {

        console.log(email)
        console.log(password)

        try{
        const response =await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/login", {
            email: email,
            password: password
        })
        toast.success("login successfull")
        console.log(response.data)
        localStorage.setItem("token",response.data.token)

        console.log("Login response:", response.data)

        //redirectiog after login
        if(response.data.role === "admin"){
             navigate("/admin")
        }else if (response.data.role === "user"){
            navigate("/")
        }else{
            navigate("/login")
        }
       

    }catch(err){
        console.log(err.response.data.message)
        toast.error(err.response.data.message)
    }
    }

    return (
        <div className = " h-screen w-screen bg-[url('/login.jpg')] bg-center bg-cover flex justify-evenly items-center">
            <div className = "w-[50%] h-full ">

            </div>
            <div className = "w-[50%] h-full flex justify-center items-center">
                
                <div className="w-[500px] h-[600px] backdrop-blur-md rounded-[20px] shadow-2xl flex flex-col justify-center items-center ">

                    <input onChange={
                        (e)=>{
                            setEmail(e.target.value)
                        }
                    } value = {email} type="email" className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] my-[20px]" placeholder='Email' />

                    <input onChange={
                        (e)=>{
                            setPassword(e.target.value)
                        } 
                    }value = {password} type="password" className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] mb-[20px]" placeholder="Password" />
                    <button onClick={handleLogin} className=" cursor-pointer w-[300px] h-[50px] bg-[#c3efe9] rounded-[20px] text-[20px] font-bold text-white my-[20px]">Login</button>
                </div>
                    
            </div>

        </div>
    )
}