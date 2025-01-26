import { useState } from 'react';
import React  from 'react';
import {FaUser, FaLock} from 'react-icons/fa';//biblioteca de icones

import "./Login.css";

const Login = () => {

    //variavel le e a outra altera
    const [username, setUsername] = useState("");
    const [password, setPassword,] = useState("");

    //funcao de envio do formulario
    const handleSubmit = (event) => {
        event.preventDefault();//desabilita o comportamento padrao
        console.log("Envio", username, password);
    };


  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse ao sistema</h1>

            <div className='input-field'>
                <input 
                    type='email' 
                    placeholder='E-mail' 
                    required
                    onChange={(e) => setUsername(e.target.value)}//pega o valor passado
                />
                <FaUser className="icon"/>
            </div>

            <div className='input-field'>
                <input 
                    type='password' 
                    placeholder='Senha'
                    required
                    onChange={(e) => setPassword(e.target.value)}//pega o valor passado
                />
                <FaLock className="icon"/>
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox"/>
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>Não tem uma conta? <a href="#">Registrar</a></p>
            </div>


        </form>

    </div>
  )
}

export default Login;
