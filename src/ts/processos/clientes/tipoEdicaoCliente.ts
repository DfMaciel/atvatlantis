import Processo from "../../abstracoes/processo";
import BuscarCliente from "../../buscas/buscarCliente";
import { Busca } from "../../interfaces/busca";
import EdicaoClienteDependente from "./edicoes/edicaoClienteDependente";
import EdicaoClienteTitular from "./edicoes/edicaoClienteTitular";

export default class TipoEdicaoCliente extends Processo {
    private busca!: Busca
    constructor() {
        super()
    }
    processar(): void {
        let documentoCliente = this.entrada.receberTexto('Qual o número do documento do cliente?')
        this.busca = new BuscarCliente(documentoCliente)
        let cliente = this.busca.buscar()
        if (cliente) {
            if (cliente.IsTitular) {
                this.processo = new EdicaoClienteTitular(documentoCliente)
                this.processo.processar()
            }
            else {
                this.processo =  new EdicaoClienteDependente(documentoCliente)
                this.processo.processar()
            }
        }
        else {
            console.log('Cliente não encontrado!')
        }
    }
}