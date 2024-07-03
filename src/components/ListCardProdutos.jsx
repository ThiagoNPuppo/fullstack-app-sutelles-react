import listaProdutos from "../data/Produtos.json"
import CardProduto from "./CardProduto"


export default function ListCardProdutos() {
    return (
        listaProdutos.map(prod => 
            <CardProduto key={prod.id} produto={prod} />
        )    
    )
}