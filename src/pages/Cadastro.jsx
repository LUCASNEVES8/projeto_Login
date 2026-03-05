import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const[login, setLogin] = useState("")
  const[senha, setSenha] = useState("")
  const navigate = useNavigate()

  async function cadastrar(e) {
    e.preventDefault()
    await fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        login,
        senha
      })
    })
    alert("Usuário cadastrado!")
    navigate("/")
  }

  return (
    <div>
      <h2>Novo Cadastro</h2>

      <form onSubmit={cadastrar}>
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        /> <br />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        /> <br />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;