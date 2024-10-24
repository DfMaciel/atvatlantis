import Processo from "../../abstracoes/processo";
import MenuTipoExclusaoCliente from "../../menus/menuTipoExclusaoCliente";
import ExcluirClienteTitular from "./excluirClienteTitular";
import ListagemDependentesEspecificos from "./listagemDependentesEspecificos";
import ListagemTitulares from "./listagemTitulares";
import ListagemTitularEspecifico from "./listagemTitularEspecifico";
import Cliente from "../../modelos/cliente";
import Armazem from "../../dominio/armazem";

export default class TipoExclusaoCliente extends Processo {
    private clientes: Cliente[]
    constructor(){
        super()
        this.menu = new MenuTipoExclusaoCliente()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ExcluirClienteTitular(this.clientes)
                this.processo.processar()
                break;
            case 2:
                let documentoTitular = this.entrada.receberTexto('Qual o documento do titular?')
                this.processo =  new ListagemDependentesEspecificos(documentoTitular)
                this.processo.processar()
                break;
            default:
                console.log('Opção não entendida... :(')
        }
    }
}