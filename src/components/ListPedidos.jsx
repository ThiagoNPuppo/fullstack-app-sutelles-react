import { useEffect, useState } from "react";
import pedidoService from "../service/PedidoService";

export default function ListPedidos() {
  const [listaPedidos, setListaPedidos] = useState([]);

  useEffect(() => {
    pedidoService.listaPedidos()
      .then(response => {
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
          <div className="dadosLista">
            <p>NOME: {pedido.comprador}</p>
            <p>DATA: {new Date(pedido.data_ped).toLocaleDateString()}</p>
            <p>PRODUTOS: {pedido.produtos.join(', ')}</p>
            <p>VALOR: {pedido.valor}</p>
          </div>     
        </div>
      ))}
    </div>
  );
}
