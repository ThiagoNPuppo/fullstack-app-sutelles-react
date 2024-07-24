import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import produtoService from "../service/ProdutoService";

export default function FormEditProdutos(){

    const { id } = useParams();
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);

    useEffect(() => {
        produtoService.getProduto(id).then(produto => {
          setNome(produto.nome);
          setPreco(produto.preco);
        }).catch(err => {
          console.error("Erro ao carregar produto:", err);
          alert("Erro ao carregar produto.");
        });
      }, [id]);

    const editarProduto = (event) => {
        event.preventDefault();
        const produtoEditado = {
            nome: nome,
            preco: preco
        };
        produtoService.updateProduto(id, produtoEditado).then(() => {
            alert("Produto atualizado com sucesso!");
            navigate("/produtos");
        }).catch(err => {
            console.error("Erro ao editar produto:", err);
            alert("Erro ao editar produto.");
        });
    }

    const voltar = () => {
        navigate(-1);
    }

    return (
    <form onSubmit={editarProduto}>
      <label>Nome:</label>
      <input type="text" name="nome" value={nome} onChange={(ev) => setNome(ev.target.value)} />
      <br />
      <label>Preço:</label>
      <input type="number" name="preco" value={preco} onChange={(ev) => setPreco(ev.target.value)} />
      <br />
      <input type="submit" value="Salvar" />
      <input type="button" value="Voltar" onClick={voltar} />
    </form>
    );
}