import Processo from "../../abstracoes/processo";
import MenuTipoExclusaoCliente from "../../menus/menuTipoExclusaoCliente";
import ExcluirClienteTitular from "./exclusoes/excluirClienteTitular";
import ExcluirClienteDependente from "./exclusoes/excluirClienteDependente";

export default class TipoExclusaoCliente extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoExclusaoCliente()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                let documentoTitular = this.entrada.receberTexto('Qual o número do documento do cliente que deseja excluir?')
                this.processo = new ExcluirClienteTitular(documentoTitular)
                this.processo.processar()
                break;
            case 2:
                let documentoDependente = this.entrada.receberTexto('Qual o documento do cliente dependente que deseja excluir?')
                this.processo =  new ExcluirClienteDependente(documentoDependente)
                this.processo.processar()
                break;
            default:
                console.log('Opção não entendida... :(')
        }
    }
}