import { useState } from "react";
import produtoService from "../service/ProdutoService";

export default function FormProdutos() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [qtdEstoque, setQtdEstoque] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState(null);

  const cadastrarProduto = (event) => {
    event.preventDefault();
    const produto = {
      nome: nome,
      preco: preco,
      qtd_estoque: qtdEstoque,
      descricao: descricao,
      imagem: imagem,
    };

    produtoService.inserirProduto(produto)
      .then((produto) => {
        console.log("Produto", produto);
        setNome("");
        setPreco(0);
        setQtdEstoque(0);
        setDescricao("");
        setImagem(null);
      });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={cadastrarProduto}>
        <h1>Cadastro de Produtos</h1>
        <h3>Novo Produto</h3>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={nome}
            onChange={(ev) => setNome(ev.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="preco">Preço:</label>
          <input
            type="number"
            className="form-control"
            id="preco"
            name="preco"
            value={preco}
            onChange={(ev) => setPreco(ev.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="qtdEstoque">Quantidade em Estoque:</label>
          <input
            type="number"
            className="form-control"
            id="qtdEstoque"
            name="qtdEstoque"
            value={qtdEstoque}
            onChange={(ev) => setQtdEstoque(ev.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            className="form-control"
            id="descricao"
            name="descricao"
            value={descricao}
            onChange={(ev) => setDescricao(ev.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imagem">Imagem do Produto:</label>
          <input
            type="file"
            className="form-control-file"
            id="imagem"
            name="imagem"
            onChange={(ev) => setImagem(ev.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Cadastrar Produto</button>
      </form>
    </div>
  );
}
