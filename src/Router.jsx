import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FormProdutos from './components/FormProdutos';
import FormEditProdutos from './components/FormEditProdutos';
import ListCardProdutos from './components/ListCardProdutos';
import FormClientes from './components/FormClientes';
import FormEditClientes from './components/FormEditClientes';
import ListClientes from './components/ListClientes';
import FormPedidos from './components/FormPedidos';
import FormEditPedidos from './components/FormEditPedidos';
import ListPedidos from './components/ListPedidos';
import Cadastro from './components/Cadastro';
import App from './App';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='produtos' element={<ListCardProdutos />} />
        <Route path='clientes' element={<ListClientes />} />
        <Route path='pedidos' element={<ListPedidos />} />
        <Route path='pedidos/novo' element={<FormPedidos />} />
        <Route path='pedidos/edit/:id' element={<FormEditPedidos />} />
        <Route path='cadastro' element={<Cadastro />}>
          <Route path='produtos'>
            <Route index element={<FormProdutos />} />
            <Route path='novo' element={<FormProdutos />} />
            <Route path='edit/:id' element={<FormEditProdutos />} />
          </Route>
          <Route path='clientes'>
            <Route index element={<FormClientes />} />
            <Route path='novo' element={<FormClientes />} />
            <Route path='edit/:id' element={<FormEditClientes />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
