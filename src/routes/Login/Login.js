import React, { useState } from "react";
import { Form } from "react-router-dom";


const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Ingrese su usuario</label>
                <input type='text' onChange={e => setUserName(e.target.value)} value={userName}/>
                <label>Ingrese la contraseña</label>
                <input type='password' onChange={e => setPassword(e.target.value)} value={password} />
                <input type="submit" value="Iniciar Sesión" />

            </form>
        </div>
    )
}

export default Login