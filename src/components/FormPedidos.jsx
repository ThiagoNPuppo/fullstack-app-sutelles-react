import { useState } from "react";
import pedidoService from "../service/PedidoService";

const FormPedidos = () => {
  const [clienteId, setClienteId] = useState('');
  const [produtoId, setProdutoId] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [pedido, setPedido] = useState(null);

  const cadastrarPedido = async (event) => {
    event.preventDefault();
    const pedido = {
      cliente: clienteId,
      produtos: [{ id: produtoId, quantidade }],
      data_ped: new Date().toISOString(),
      valor: 0, 
      status: 'aguardando pagamento',
    };
    
    try {
      const novoPedido = await pedidoService.inserirPedido(pedido);
      console.log('Pedido cadastrado:', novoPedido);
      setPedido(novoPedido);
      setClienteId('');
      setProdutoId('');
      setQuantidade(1);
      alert('Pedido cadastrado com sucesso!');
    } catch (err) {
      console.error('Erro ao cadastrar pedido:', err);
      alert('Erro ao cadastrar pedido.');
    }
  };

  return (
    <div>
      <form onSubmit={cadastrarPedido}>
        <label>
          Cliente ID:
          <input type="text" name="clienteId" value={clienteId} onChange={(e) => setClienteId(e.target.value)} />
        </label>
        <br />
        <label>
          Produto ID:
          <input type="text" name="produtoId" value={produtoId} onChange={(e) => setProdutoId(e.target.value)} />
        </label>
        <br />
        <label>
          Quantidade:
          <input type="number" name="quantidade" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Salvar" />
      </form>

      {pedido && (
        <div>
          <h2>Detalhes do Pedido</h2>
          <p>Data do Pedido: {new Date(pedido.data_ped).toLocaleString()}</p>
          <p>Valor Total: {pedido.valor}</p>
          <h3>Produtos:</h3>
          <ul>
            {pedido.produtos.map(produto => (
              <li key={produto.id}>
                ID do Produto: {produto.id}, Quantidade: {produto.quantidade}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FormPedidos;



//   const cadastrarPedido = async (event) => {
//     event.preventDefault();
//     pedidoService.inserirPedido({ clienteId, produtoId, quantidade })
//       .then(pedido => {
//         console.log("Pedido", pedido);
//         setClienteId("");
//         setProdutoId("");
//         setQuantidade(1);
//         alert("Pedido cadastrado com sucesso!");
//       })
//       // .catch(err => {
//       //   console.error("Erro ao cadastrar pedido:", err);
//       //   alert("Erro ao cadastrar pedido.");
//       // });
//   };

//   return (
//     <form onSubmit={cadastrarPedido}>
//       <label>Cliente ID:</label>
//       <input type="text" name="clienteId" value={clienteId} onChange={(ev) => setClienteId(ev.target.value)} />
//       <br />
//       <label>Produto ID:</label>
//       <input type="text" name="produtoId" value={produtoId} onChange={(ev) => setProdutoId(ev.target.value)} />
//       <br />
//       <label>Quantidade:</label>
//       <input type="number" name="quantidade" value={quantidade} onChange={(ev) => setQuantidade(ev.target.value)} />
//       <br />
//       <input type="submit" value="Salvar" />
//     </form>
//   );
// }
