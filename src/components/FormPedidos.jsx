import {useState, useEffect} from "react";
import clienteService from "../service/ClienteService";
import produtoService from "../service/ProdutoService";
import pedidoService from "../service/PedidoService";

export default function FormPedidos() {
  const [clientes, setClientes] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [cliente, setCliente] = useState("");
  const [dataPed, setDataPed] = useState("");
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    clienteService.listaClientes().then((response) => {
      setClientes(response.data);
    });
    produtoService.listaProdutos().then((response) => {
      setProdutos(response.data);
    });
  }, []);

  const cadastrarPedido = (event) => {
    event.preventDefault();
    const pedido = {
      cliente: cliente,
      data_ped: dataPed,
      produtos: produtosSelecionados,
      status: "aguardando pagamento"
    };

    pedidoService.inserirPedido(pedido)
      .then((response) => {
        console.log("Pedido", response.data);
        setCliente("");
        setDataPed("");
        setProdutosSelecionados([]);
        setErrorMessage("");
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("Erro ao cadastrar o pedido");
        }
      });
  };

  const handleProdutoChange = (produtoId) => {
    if (produtosSelecionados.includes(produtoId)) {
      setProdutosSelecionados(produtosSelecionados.filter(id => id !== produtoId));
    } else {
      setProdutosSelecionados([...produtosSelecionados, produtoId]);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={cadastrarPedido}>
        <h1>Cadastro de Pedido</h1>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <div className="form-group">
          <label htmlFor="cliente">Cliente:</label>
          <select
            className="form-control"
            id="cliente"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          >
            <option value="">Selecione um cliente</option>
            {clientes.map((cli) => (
              <option key={cli.id} value={cli.id}>{cli.nome}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dataPed">Data do Pedido:</label>
          <input
            type="date"
            className="form-control"
            id="dataPed"
            value={dataPed}
            onChange={(e) => setDataPed(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Produtos:</label>
          {produtos.map((produto) => (
            <div key={produto.id} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`produto-${produto.id}`}
                checked={produtosSelecionados.includes(produto.id)}
                onChange={() => handleProdutoChange(produto.id)}
              />
              <label className="form-check-label" htmlFor={`produto-${produto.id}`}>
                {produto.nome}
              </label>
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary mt-3">Cadastrar Pedido</button>
      </form>
    </div>
  );
}
