import { useEffect, useState } from "react";
import pedidoService from "../service/PedidoService";

export default function ListPedidos() {
  const [listaPedidos, setListaPedidos] = useState([]);

  useEffect(() => {
    console.log("Buscando pedidos...");
    pedidoService.listaPedidos()
      .then(response => {
        console.log("Pedidos encontrados:", response.data);
        setListaPedidos(response.data);
      })
      // .catch(err => {
      //   console.error("Erro ao listar pedidos:", err);
      //   alert("Erro ao listar pedidos.");
      // });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista de Pedidos</h1>
      {listaPedidos.map(pedido => (
        <div key={pedido.id} className="list-group-item">
          <h5 className="mb-1">PEDIDO Nº: {pedido.id}</h5>
          <p>NOME: {pedido.cliente?.nome}</p>
          <p>DATA: {new Date(pedido.data_ped).toLocaleDateString()}</p>
          <p>PRODUTOS: {pedido.produtos.map(produto => produto.nome).join(', ')}</p>
          <p>VALOR: {pedido.valor}</p>
          <br/><br/><br/>
        </div>
      ))}
    </div>
  );
}
