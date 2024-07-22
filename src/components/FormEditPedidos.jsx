import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import pedidoService from "../service/PedidoService";

export default function FormEditPedidos() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [clienteId, setClienteId] = useState("");
  const [produtoId, setProdutoId] = useState("");
  const [quantidade, setQuantidade] = useState(1);

  useEffect(() => {
    pedidoService.getPedido(id)
      .then(pedido => {
        setClienteId(pedido.clienteId);
        setProdutoId(pedido.produtoId);
        setQuantidade(pedido.quantidade);
      })
      // .catch(err => {
      //   console.error("Erro ao carregar pedido:", err);
      //   alert("Erro ao carregar pedido.");
      // });
  }, [id]);

  const editarPedido = (event) => {
    event.preventDefault();
    pedidoService.updatePedido(id, { clienteId, produtoId, quantidade })
      .then(() => {
        alert("Pedido atualizado com sucesso!");
        navigate("/pedidos");
      })
      .catch(err => {
        console.error("Erro ao editar pedido:", err);
        alert("Erro ao editar pedido.");
      });
  };

  return (
    <form onSubmit={editarPedido}>
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
