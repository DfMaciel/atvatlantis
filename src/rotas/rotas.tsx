import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home';
import CadastrarClientePage from '../pages/cadastrarClientePage';

export default function Rotas () {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cadastrarCliente" element={<CadastrarClientePage />} />
        </Routes>
    )
}