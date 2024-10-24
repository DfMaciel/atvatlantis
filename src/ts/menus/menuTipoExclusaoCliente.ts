import Menu from "../interfaces/menu";

export default class MenuTipoExclusaoCliente implements Menu {
    mostrar(): void {
        console.log(`****************************`)
        console.log(`| Por favor, selecione uma opção...`)
        console.log(`----------------------`)
        console.log(`| Opções para exclusão de cliente:`)
        console.log(`----------------------`)
        console.log(`| 1 - Excluir cliente titular`)
        console.log(`| 2 - Excluir cliente dependente`)
        console.log(`****************************`)
        console.log(`| 0 - Voltar`)
        console.log(`----------------------`)
    }
}