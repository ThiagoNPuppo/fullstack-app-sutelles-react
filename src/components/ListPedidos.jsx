import { useEffect, useState } from "react";
import pedidoService from "../service/PedidoService";

export default function ListPedidos() {
  const [listaPedidos, setListaPedidos] = useState([]);

  useEffect(() => {
    console.log("Buscando pedidos...");
    pedidoService.listaPedidos()
      .then(pedidos => {
        console.log("Pedidos encontrados:", pedidos.data);
        setListaPedidos(pedidos.data);
      })
        // .catch(err => {
        //     console.error("Erro ao listar pedidos:", err);
        //     alert("Erro ao listar pedidos.");
        // });
    }, []);

    return (
        <div>
            <h1>Lista de Pedidos</h1>
            <ul>
                {listaPedidos.map(pedido => (
                    <li key={pedido.id}>
                        {pedido.cliente.nome} - {pedido.produto.nome} - {pedido.quantidade}
                    </li>
                ))}
            </ul>
        </div>
    );
}