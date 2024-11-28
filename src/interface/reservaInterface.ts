import { VisualizarUsuario } from "./usuarioInterface";
import { VisualizarAcomodacao } from "./acomodacaoInterface";

export interface VisualizarReserva {
    id: number;
    acomodacao: VisualizarAcomodacao;
    dataInicio: string;
    dataFim: string;
    cliente: VisualizarUsuario;
}