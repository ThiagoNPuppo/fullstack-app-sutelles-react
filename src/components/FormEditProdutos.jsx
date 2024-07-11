import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import produtoService from "../service/ProdutoService";

export default function FormEditProdutos(){

    const { id } = useParams();
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);

    useEffect(() => {
        alert ("Carregando Produto "+id);
    }, [])

    const editarProduto = (event) => {
        event.preventDefault();
        alert("Editando o produto "+id);
    } 

    const voltar = () => {
        navigate(-1);
    }
    return (
        <form onSubmit= {editarProduto}>
            <label>Nome:</label>
            <input type="text" name="nome" value={nome} 
                onChange={(ev) => setNome(ev.target.value)} />
            <br />
            <label>Preço:</label>
            <input type="number" name="preco" value={preco} 
                onChange={(ev) => setPreco(ev.target.value)} />
            <br />
            <input type="submit" value="Salvar"/>
            <input type="button" value="Voltar" onClick={voltar} />
        </form>
    )
}