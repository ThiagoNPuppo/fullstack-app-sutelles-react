import { useEffect, useState } from "react";
import clienteService from "../service/ClienteService";

export default function ListClientes() {
  const [listaClientes, setListaClientes] = useState([]);

  useEffect(() => {
    console.log("Buscando clientes...");
    clienteService.listaClientes()
      .then(clientes => {
        console.log("Clientes encontrados:", clientes.data);
        setListaClientes(clientes.data);
      })
      // .catch(err => {
      //   console.error("Erro ao listar clientes:", err);
      //   alert("Erro ao listar clientes.");
      // });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista de Clientes</h1>
      {listaClientes.map(cliente => (
          <div key={cliente.id} className="list-group-item">
            <h5 className="mb-1">{cliente.nome}</h5>
            <p>{cliente.cpf}</p>
            <p>{cliente.email}</p>
            <p>{cliente.telefone}</p>
          </div>
        ))}
    </div>
  );
}
