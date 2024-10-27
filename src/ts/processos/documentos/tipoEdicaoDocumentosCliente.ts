import Processo from "../../abstracoes/processo";
import Impressor from "../../interfaces/impressor";
import MenuTipoEdicaoDocumentoCliente from "../../menus/menuTipoEdicaoDocumentoCliente";
import Cliente from "../../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import ExcluirDocumentoCliente from "./excluirDocumentoCliente";

export default class TipoEdicaoDocumentosCliente extends Processo {
    private cliente: Cliente
    private impressor!: Impressor
    constructor(cliente: Cliente) {
        super()
        this.menu = new MenuTipoEdicaoDocumentoCliente()
        this.cliente = cliente
    }
    processar(): void {
        let edicao = true
        while (edicao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
            switch (this.opcao) {
                case 1:
                    this.processo = new CadastrarDocumentosCliente(this.cliente)
                    this.processo.processar()
                    break;
                case 2:
                    this.processo =  new ExcluirDocumentoCliente(this.cliente)
                    this.processo.processar()
                    break;
                case 0:
                    break;
                default:
                    console.log('Opção não entendida... :(')
            }
        }
    }
}