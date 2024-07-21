import { useState } from "react";
import pedidoService from "../service/PedidoService";

export default function FormPedidos() {
  const [clienteId, setClienteId] = useState("");
  const [produtoId, setProdutoId] = useState("");
  const [quantidade, setQuantidade] = useState(1);

  const cadastrarPedido = (event) => {
    event.preventDefault();
    pedidoService.inserirPedido({ clienteId, produtoId, quantidade })
      .then(pedido => {
        console.log("Pedido", pedido);
        setClienteId("");
        setProdutoId("");
        setQuantidade(1);
        alert("Pedido cadastrado com sucesso!");
      })
      .catch(err => {
        console.error("Erro ao cadastrar pedido:", err);
        alert("Erro ao cadastrar pedido.");
      });
  };

  return (
    <form onSubmit={cadastrarPedido}>
      <label>Cliente ID:</label>
      <input type="text" name="clienteId" value={clienteId} onChange={(ev) => setClienteId(ev.target.value)} />
      <br />
      <label>Produto ID:</label>
      <input type="text" name="produtoId" value={produtoId} onChange={(ev) => setProdutoId(ev.target.value)} />
      <br />
      <label>Quantidade:</label>
      <input type="number" name="quantidade" value={quantidade} onChange={(ev) => setQuantidade(ev.target.value)} />
      <br />
      <input type="submit" value="Salvar" />
    </form>
  );
}
