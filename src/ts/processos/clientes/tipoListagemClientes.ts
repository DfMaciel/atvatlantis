import Processo from "../../abstracoes/processo";
import MenuTipoListagemClientes from "../../menus/menuTipoListagemClientes";
import ListagemDependentes from "./listagens/listagemDependentes";
import ListagemDependentesEspecificos from "./listagens/listagemDependentesEspecificos";
import ListagemTitulares from "./listagens/listagemTitulares";
import ListagemTitularEspecifico from "./listagens/listagemTitularEspecifico";

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
            case 3:
                let documentoDependente = this.entrada.receberTexto('Qual o documento do dependente?')
                this.processo = new ListagemTitularEspecifico(documentoDependente)
                this.processo.processar()
                break;
            case 4:
                this.processo = new ListagemDependentes()
                this.processo.processar()
                break;
            default:
                console.log('Opção não entendida... :(')
        }
    }
}