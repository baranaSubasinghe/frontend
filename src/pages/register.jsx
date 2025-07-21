import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function RegisterPage() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    async function handleRegister() {
        try {
            const response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users/create", {
                firstName,
                lastName,
                email,
                password
            })
            toast.success("Registration successful")
           console.log(response.data)
            navigate("/login")
        }catch (err) {  
            console.log(err)

            const errorMessage = err.response?.data?.message || "Something went wrong"
            toast.error(errorMessage)
        }

    }

    return (
        <div className="h-screen w-screen bg-[url('/login.jpg')] bg-center bg-cover flex justify-evenly items-center">
            <div className="w-[50%] h-full">
            </div>
            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[500px] h-[650px] backdrop-blur-md rounded-[20px] shadow-2xl flex flex-col justify-center items-center ">

                    <input
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        type="text"
                        className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] my-[15px]"
                        placeholder='First Name'
                    />

                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        type="text"
                        className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] my-[15px]"
                        placeholder='Last Name'
                    />

                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] my-[15px]"
                        placeholder='Email'
                    />

                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] my-[15px]"
                        placeholder='Password'
                    />

                    <button
                        onClick={handleRegister}
                        className="cursor-pointer w-[300px] h-[50px] bg-[#c3efe9] rounded-[20px] text-[20px] font-bold text-white my-[20px]"
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    )
}
