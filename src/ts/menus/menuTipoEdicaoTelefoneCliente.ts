import Menu from "../interfaces/menu";

export default class MenuTipoEdicaoTelefoneCliente implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual operação irá realizar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Adicionar telefone`)
        console.log(`| 2 - Excluir telefone`)
        console.log(`----------------------`)
        console.log(`| 0 - Voltar`)
    }
}