import { useEffect, useState } from "react";
import clienteService from "../service/ClienteService";

export default function ListClientes() {
  const [listaClientes, setListaClientes] = useState([]);

  useEffect(() => {
    console.log("Fetching clientes...");
    clienteService.listaClientes()
      .then(clientes => {
        console.log("Clientes fetched:", clientes.data);
        setListaClientes(clientes.data);
      })
      // .catch(err => {
      //   console.error("Erro ao listar clientes:", err);
      //   alert("Erro ao listar clientes.");
      // });
  }, []);

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ul>
        {listaClientes.map(cliente => (
          <li key={cliente.id}>
            {cliente.nome} - {cliente.cpf} - {cliente.email} - {cliente.telefone}
          </li>
        ))}
      </ul>
    </div>
  );
}
