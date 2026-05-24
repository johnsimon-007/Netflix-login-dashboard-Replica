import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"

import axios from "axios"
import "../app.css"

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate=useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (
            email.trim() === "" || password.trim() === ""
        ) {
            setError("All fields are required")
            return
        }

        setError("")

        try {

            const response = await axios.post(
                "https://server-backend-08fp.onrender.com/login",
                {
                    email,
                    password
                }
            )
              console.log("Login Successful")

            navigate("/dashboard")

        } catch (error) {

            setError(error.response.data.message)

        }

    }




return (
    <div className='container'>

        <div className='overlay'>

            <h1 className='title'>
                Unlimited movies, shows, and more
            </h1>

            <div className='login-box'>

                <h1>Login</h1>

                <form onSubmit={handleSubmit}>

                    {error && <p className='error'>{error}</p>}

                    <input
                        type='email'
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setError("")
                        }}
                    />

                    <input type='password' placeholder='Enter your password' value={password} onChange={(e) => {
                        setPassword(e.target.value)
                        setError("")
                    }} 
                    />

                    <button type='submit'>
                        Login
                    </button>
                    <p className="switch-text">
                        Don't have an account? <Link to="/">Sign Up</Link>
                    </p>
                </form>

            </div>

        </div>

    </div>
)
}

export default Login