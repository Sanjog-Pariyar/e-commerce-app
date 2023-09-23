import { Link, useNavigate } from "react-router-dom"
import { auth } from "../../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"


const Register = () => {

    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const navigate = useNavigate()

    const registerHandler = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password1)
            navigate('/app')
        } catch(err) {
            console.error(err)
        }
    }

    return(
        <section className="container">
            <form onSubmit={(e) => e.preventDefault()}>
                <h2>Register</h2>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <input 
                    type="password" 
                    name="password1" 
                    placeholder="Password" 
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}/>
                <input 
                    type="password" 
                    name="password2" 
                    placeholder="Confirm Password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}/>
                <button onClick={registerHandler}>Register</button>
            </form>
            <button className="homepage">
                <Link to={'/'}>Login</Link>
            </button>
        </section>
    )
}

export default Register