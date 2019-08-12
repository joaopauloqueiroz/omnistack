import React, {useState} from 'react'
import './login.css'
function Login() {
    const [username, setUsername] = useState('')
    function handleSubmit(e){
        e.preventDefault();
        console.log(username)
    }
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
            <h1>TINDEV</h1>
                <input placeholder="Digite seu usuário do github" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Login