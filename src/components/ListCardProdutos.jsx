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
        listaProdutos.map(prod => 
            <CardProduto key={prod.id} produto={prod} />
        )    
    )
}