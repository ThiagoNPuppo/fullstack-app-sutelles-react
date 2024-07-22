import { useEffect } from "react";
import { useState } from "react"
import CardProduto from "./CardProduto"
import produtoService from '../service/ProdutoService'


export default function ListCardProdutos() {
    const [listaProdutos, setListaProdutos] = useState([]);

    useEffect(() => {
        produtoService.listaProdutos()
            .then((produtos) => setListaProdutos(produtos));
    }, [])

    return (
        <ul>
        {listaProdutos.map(prod => 
            <li key={prod.id}><CardProduto produto={prod} /> 
            </li>
        )}
        </ul>    
    )
}