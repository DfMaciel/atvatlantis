import Menu from "../interfaces/menu";

export default class MenuTipoEdicaoDocumentoCliente implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual operação irá realizar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Adicionar documento`)
        console.log(`| 2 - Excluir documento`)
        console.log(`----------------------`)
        console.log(`| 0 - Voltar`)
    }
}