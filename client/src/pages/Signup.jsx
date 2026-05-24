import { useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import "../app.css"
function Signup() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (username.trim() === "" || password.trim() === "" || email.trim() === "") {
            setError("All fields are required")
            return
        }
        setError("")
        
        try {
            const response = await axios.post(
                "https://server-backend-08fp.onrender.com/signup",
                {
                    username,email,password
                }
            )
            alert(response.data.message)
        }
        catch(error){
           setError(error.response.data.message)
        }
    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
        setError("")
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        setError("")
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setError("")
    }
    return (
        <>

            <div className='container'>
                <div className='overlay'>
                    <h1 className='title'>Unlimited movies, shows, and more</h1>
                    <div className='login-box'>

                        <h1>Sign Up Now!</h1>
                        <form onSubmit={handleSubmit}>
                            {error && <p className='error'>{error}</p>}
                            <input type='text' placeholder='Enter your Username' value={username} onChange={handleUsername} />
                            <input type='email' placeholder='Enter your email' value={email} onChange={handleEmail} />
                            <input type='password' placeholder='Create your password' value={password} onChange={handlePassword} />
                            <button type="submit">Sign Up</button>
                            <p className="switch-text">
                                Already have an account? <Link to="/login">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
