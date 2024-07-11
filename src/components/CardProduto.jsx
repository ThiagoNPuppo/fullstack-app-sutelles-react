import { useNavigate } from "react-router-dom"

export default function CardProduto({ produto }) {
    const navigate = useNavigate();
    const editarProduto = () => {
        navigate(`/edit/${produto.id}`)
    }
    return (
        <div className="w3-col l4 m6 s12 w3-container w3-padding-16" onClick={editarProduto}>
            <div className="w3-card">
                <div className="w3-container w3-center">
                    <img src="pedigree.jpg" style={{ width: "70%" }} />
                    <h5>{produto.nome}</h5>
                    <h3 className="w3-blue">
                        {produto.preco.toLocaleString("pt-BR",{style:"currency", currency:"BRL"})}
                    </h3>
                </div>
            </div>
        </div>
    )
}