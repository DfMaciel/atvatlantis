import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home';
import CadastrarClientePage from '../pages/cadastrarClientePage';
import ListarClientePage from '../pages/listarClientePage';

export default function Rotas () {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cadastrarCliente" element={<CadastrarClientePage />} />
            <Route path="/listarCliente" element={<ListarClientePage />} />
        </Routes>
    )
}