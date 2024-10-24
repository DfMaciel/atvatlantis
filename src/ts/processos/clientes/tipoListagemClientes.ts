import Processo from "../../abstracoes/processo";
import MenuTipoListagemClientes from "../../menus/menuTipoListagemClientes";
import ListagemDependentesEspecificos from "./listagemDependentesEspecificos";
import ListagemTitulares from "./listagemTitulares";

export default class TipoListagemClientes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoListagemClientes()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemTitulares()
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