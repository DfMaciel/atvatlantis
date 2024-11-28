import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home';
import CadastrarClientePage from '../pages/cadastrarClientePage';
import ListarClientePage from '../pages/listarClientePage';
import ListarReservasPage from '../pages/listarReservasPage';
import CadastrarReservaPage from '../pages/cadastrarReservaPage';

export default function Rotas () {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cadastrarCliente" element={<CadastrarClientePage />} />
            <Route path="/listarCliente" element={<ListarClientePage />} />
            <Route path="/listarReservas" element={<ListarReservasPage />} />
            <Route path="/cadastrarReserva" element={<CadastrarReservaPage />} />
        </Routes>
    )
}