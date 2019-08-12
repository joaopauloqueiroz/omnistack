import React, {useState} from 'react'
import './login.css'
import api from '../services/api'

function Login({ history }) {
    const [username, setUsername] = useState('')
    async function handleSubmit(e){
        e.preventDefault();
        const response = await api.post('/devs', { username })
        console.log(response.data)
        // history.push('/main')
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