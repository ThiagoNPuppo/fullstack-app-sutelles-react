import { Route, Routes } from "react-router-dom";
import App from "./App";
import FormProdutos from "./components/FormProdutos";
import Home from "./components/Home";
import ListCardProdutos from "./components/ListCardProdutos";

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<App></App>}>
                <Route index element={<Home />} />
                <Route path='/lista' element={<ListCardProdutos />} />
                <Route path='/cadastro' element={<FormProdutos />} />
            </Route>
        </Routes>
    )
}