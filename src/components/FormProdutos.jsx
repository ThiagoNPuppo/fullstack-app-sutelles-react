import { useState } from "react";
import produtoService from "../service/ProdutoService";

export default function FormProdutos(){

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);

    const cadastrarProduto = (event) => {
        event.preventDefault();
        produtoService.inserirProduto({nome: nome, preco: preco})
            .then(produto => {
                console.log("Produto",produto);
                setNome("");
                setPreco(0);       
            })            
    } 
    return (
        <form onSubmit= {cadastrarProduto}>
            <label>Nome:</label>
            <input type="text" name="nome" value={nome} 
                onChange={(ev) => setNome(ev.target.value)} />
            <br />
            <label>Preço:</label>
            <input type="number" name="preco" value={preco} 
                onChange={(ev) => setPreco(ev.target.value)} />
            <br />
            <input type="submit" value="Salvar"/>
        </form>
    )
}