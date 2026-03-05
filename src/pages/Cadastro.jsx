import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cadastro.css";

function Cadastro() {

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function cadastrar(e) {
    e.preventDefault();

    if (!login || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          login,
          senha
        })
      });

      if (response.ok) {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      } else {
        alert("Erro ao cadastrar usuário.");
      }

    } catch (error) {
      alert("Erro de conexão com o servidor.");
      console.error(error);
    }
  }

  return (
    <div className="cadastro-container">

      <div className="cadastro-card">

        <h2>Cadastro de Usuário</h2>

        <form onSubmit={cadastrar}>

          <input
            type="text"
            placeholder="Digite seu login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />

          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit">
            Cadastrar
          </button>

        </form>

      </div>

    </div>
  );
}

export default Cadastro;