import { Z_ASCII } from "zlib";
import Processo from "../../abstracoes/processo";
import ImpressorDocumentos from "../../impressores/impressorDocumentos";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import Documento from "../../modelos/documento";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";

export default class ExcluirDocumentoCliente extends Processo {
    private cliente: Cliente
    private impressor!: Impressor
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }
    
    private mapTipoDocumento(tipo: string): TipoDocumento | undefined {
        switch (tipo.toUpperCase()) {
            case "CPF":
                return TipoDocumento.CPF;
            case "RG":
                return TipoDocumento.RG;
            case "PASSAPORTE":
                return TipoDocumento.Passaporte;
            default:
                return undefined;
        }
    }
    
    processar(): void {
        this.impressor = new ImpressorDocumentos(this.cliente.Documentos)
        let numeroDocumento = this.entrada.receberTexto('Insira o número do documento que será excluído')
        let tipoDocumento = this.entrada.receberTexto('Insira o tipo do documento que será excluído (CPF, RG, Passaporte)')
        const tiposValidos = ["CPF", "RG", "Passaporte"]
        if (!tiposValidos.includes(tipoDocumento)) {
            console.log("Tipo inválido")
            let tipoDocumento = this.entrada.receberTexto('Insira o tipo do documento que será excluído (CPF, RG, Passaporte)')
        }
        let tipo = this.mapTipoDocumento(tipoDocumento);

        let index = this.cliente.Documentos.findIndex(documento => 
            documento.Numero === numeroDocumento && documento.Tipo === tipo)

        if (index !== -1) {
            this.cliente.Documentos.splice(index, 1);
            console.log(`Documento ${tipoDocumento} com número ${numeroDocumento} excluído com sucesso!`);
        } else {
            console.log(`Documento ${tipoDocumento} com número ${numeroDocumento} não encontrado.`);
        }
    }
}