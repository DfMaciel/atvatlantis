import Menu from "../../interfaces/menu";
import Cliente from "../../modelos/cliente";
import Processo from "../../abstracoes/processo";
import MenuTipoEdicaoTelefoneCliente from "../../menus/menuTipoEdicaoTelefoneCliente";
import CadastroTelefonesCliente from "./cadastroTelefonesCliente";
import ExcluirTelefoneCliente from "./excluirTelefoneCliente";

export default class TipoEdicaoTelefonesCliente extends Processo {
    private cliente: Cliente
    public menu!: Menu
    constructor(cliente: Cliente) {
        super()
        this.menu = new MenuTipoEdicaoTelefoneCliente()
        this.cliente = cliente
    }
    processar(): void {
        let edicao = true
        while (edicao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
            switch (this.opcao) {
                case 1:
                    this.processo = new CadastroTelefonesCliente(this.cliente)
                    this.processo.processar()
                    break;
                case 2:
                    this.processo =  new ExcluirTelefoneCliente(this.cliente)
                    this.processo.processar()
                    break;
                case 0:
                    edicao = false
                    break;
                default:
                    console.log('Opção não entendida... :(')
            }
        }
    }
}