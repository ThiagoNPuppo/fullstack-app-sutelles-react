import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clienteService from "../service/ClienteService";

export default function ListClientes() {
  const [listaClientes, setListaClientes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    clienteService.listaClientes()
      .then(clientes => {
        setListaClientes(clientes.data);
      })
      // .catch(err => {
      //   console.error("Erro ao listar clientes:", err);
      //   alert("Erro ao listar clientes.");
      // });
  }, []);

  const editarCliente = (id) => {
    navigate(`/cadastro/clientes/edit/${id}`);
    // clienteService.editarCliente(id)
    //   .then(() => {
    //     setListaClientes(listaClientes.filter(cliente => cliente.id !== id));
    //   })
      // .catch(err => {
      //   console.error("Erro ao editar cliente:", err);
      //   alert("Erro ao editar cliente.");
      // });
    
  };

  const removerCliente = (id) => {
    clienteService.deleteCliente(id)
      .then(() => {
        setListaClientes(listaClientes.filter(cliente => cliente.id !== id));
        alert("Cliente removido com sucesso!");
      })
      .catch(err => {
        console.error("Erro ao remover cliente:", err);
        alert("Erro ao remover cliente.");
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista de Clientes</h1>
      {listaClientes.length > 0 ? (
        listaClientes.map(cliente => (
          <div key={cliente.id} className="list-group-item">
            <h5 className="mb-1">{cliente.id} - {cliente.nome}</h5>
            <div className="dadosLista">
            <p>CPF: {cliente.cpf}</p>
            <p>Email: {cliente.email}</p>
            <p>Telefone: {cliente.telefone}</p>
            </div>
            <div>
              <button className="btn btn-primary me-2" onClick={() => editarCliente(cliente.id)}>Editar</button>
              <button className="btn btn-danger" onClick={() => removerCliente(cliente.id)}>Remover</button>
            </div>            
          </div>
        ))
      ) : (
        <p>Nenhum cliente encontrado.</p>
      )}
    </div>
  );
}