import { Route, Routes } from "react-router-dom";
import App from "./App";
import FormEditProdutos from "./components/FormEditProdutos";
import FormProdutos from "./components/FormProdutos";
import Home from "./components/Home";
import ListCardProdutos from "./components/ListCardProdutos";
import ListClientes from "./components/ListClientes";
import FormClientes from "./components/FormClientes";
import FormEditClientes from "./components/FormEditClientes";
import ListPedidos from "./components/ListPedidos";
import FormPedidos from "./components/FormPedidos";
import FormEditPedidos from "./components/FormEditPedidos";
import Cadastro from "./components/Cadastro";

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<App></App>}>
                <Route index element={<Home />} />
                <Route path='/produtos' element={<ListCardProdutos />} />
                <Route path='/produtos/novo' element={<FormProdutos />} />
                <Route path='/produtos/edit/:id' element={<FormEditProdutos />} />
                <Route path='/clientes' element={<ListClientes />} />
                <Route path='/clientes/novo' element={<FormClientes />} />
                <Route path='/clientes/edit/:id' element={<FormEditClientes />} />
                <Route path='/pedidos' element={<ListPedidos />} />
                <Route path='/pedidos/novo' element={<FormPedidos />} />
                <Route path='/pedidos/edit/:id' element={<FormEditPedidos />} />
                <Route path='/cadastro' element={<Cadastro />} />
            </Route>
        </Routes>
    )
}