
import { useEffect, useState } from "react";
import CardProduto from "./CardProduto";
import produtoService from '../service/ProdutoService';

export default function ListCardProdutos() {
  const [listaProdutos, setListaProdutos] = useState([]);

  useEffect(() => {
    produtoService.listaProdutos()
      .then(response => {
        console.log('Produtos encontrados:', response.data);
        setListaProdutos(response.data);
    //   })
    //   .catch(err => {
    //     console.error('Erro ao listar produtos:', err);
    //     alert('Erro ao listar produtos.');
    //   
    });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista de Produtos</h1>
      <div className="row">
        {listaProdutos.length > 0 ? (
          listaProdutos.map(prod => 
            <CardProduto key={prod.id} produto={prod} />
          )
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>    
    </div>
  );
}











// import { useEffect } from "react";
// import { useState } from "react"
// import CardProduto from "./CardProduto"
// import produtoService from '../service/ProdutoService'


// export default function ListCardProdutos() {
//     const [listaProdutos, setListaProdutos] = useState([]);

//     useEffect(() => {
//         produtoService.listaProdutos()
//             .then((produtos) => setListaProdutos(produtos));
//     }, [])

//     return (
//         <ul>
//         {listaProdutos.map(prod => 
//             <li key={prod.id}><CardProduto produto={prod} /> 
//             </li>
//         )}
//         </ul>    
//     )
// }

