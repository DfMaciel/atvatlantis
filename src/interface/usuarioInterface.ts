import { VisualizarDocumento } from './documentoInterface';
import { VisualizarTelefone } from './telefoneInterface';

export interface VisualizarUsuario {
        id: number;
        nome: string;
        email: string;
        dataNascimento: string;
        estado: string;
        cidade: string;
        rua: string;
        numeroRua: string;
        cep: string;
        documentos: VisualizarDocumento[];
        telefones: VisualizarTelefone[];
        dependentes?: VisualizarUsuario[];
        isDependente: boolean;
}