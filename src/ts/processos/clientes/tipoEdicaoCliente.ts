import Processo from "../../abstracoes/processo";
import BuscarCliente from "../../buscas/buscarCliente";
import { Busca } from "../../interfaces/busca";
import Menu from "../../interfaces/menu";
import MenuTipoEdicaoCliente from "../../menus/menuTipoEdicaoCliente";
import EdicaoClienteTitular from "./edicoes/edicaoClienteTitular";

export default class TipoEdicaoCliente extends Processo {
    private busca!: Busca
    constructor() {
        super()
        this.menu =  new MenuTipoEdicaoCliente()
    }
    processar(): void {
        let documentoCliente = this.entrada.receberTexto('Qual o número do documento do cliente?')
        this.busca = new BuscarCliente(documentoCliente)
        let cliente = this.busca.buscar()
        if (cliente) {
            if (cliente.IsTitular) {
                this.processo = new EdicaoClienteTitular(documentoCliente)
            }
            else {
                this.processo =  new EdicaoClienteDependente(documentoCliente)
            }
        }
        else {
            console.log('Cliente não encontrado!')
        }
    }
}