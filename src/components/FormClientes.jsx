import { useState } from "react";
import clienteService from "../service/ClienteService";

export default function FormClientes() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  const cadastrarCliente = (event) => {
    event.preventDefault();
    const cliente = {
      nome: nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
      endereco: endereco,
    };

    clienteService.inserirCliente(cliente)
      .then((cliente) => {
        console.log("Cliente", cliente);
        setNome("");
        setCpf("");
        setEmail("");
        setTelefone("");
        setEndereco("");
      });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={cadastrarCliente}>
        <h1>Cadastro de Clientes</h1>
        <h3>Novo Cliente</h3>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={nome}
            onChange={(ev) => setNome(ev.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            className="form-control"
            id="cpf"
            name="cpf"
            value={cpf}
            onChange={(ev) => setCpf(ev.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            className="form-control"
            id="telefone"
            name="telefone"
            value={telefone}
            onChange={(ev) => setTelefone(ev.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endereco">Endereço:</label>
          <textarea
            className="form-control"
            id="endereco"
            name="endereco"
            value={endereco}
            onChange={(ev) => setEndereco(ev.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Cadastrar Cliente</button>
      </form>
    </div>
  );
}
