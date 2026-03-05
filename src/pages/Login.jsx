import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


function Login() {
    const[login, setLogin] = useState("")
    const[senha, setSenha] = useState("")
    const[erro, setErro] = useState("")
    const navigate = useNavigate()

    async function validarLogin(e) {
      e.preventDefault()
      const response = await fetch("http://localhost:3000/usuarios")
      const usuarios = await response.json()
      const usuarioValido = usuarios.find(
        (u) => u.login === login && u.senha === senha
      )
      if (usuarioValido) {
        navigate("/home")
      }else{
        setErro("Login ou senha inválidos!!!")
      }
    }
    
    return (
      <>
      <h1>Login</h1>
      <form onSubmit={validarLogin}>
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e => setLogin(e.target.value))}
        /> <br />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e => setSenha(e.target.value))}
        /> <br />
        <button type="submit">Entrar</button>
    </form>
    {erro && <p style={{color: "red"}}>{erro}</p>}
      <Link to={"/cadastro"}>Cadastro</Link>
      </>
    )
  }
  
  export default Login