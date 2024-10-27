import Menu from "../interfaces/menu";

export default class MenuCamposEdicaoClienteTitular implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual campo deseja alterar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Nome`)
        console.log(`| 2 - Nome Social`)
        console.log(`| 3 - Data de nascimento`)
        console.log(`| 4 - Endereço`)
        console.log(`| 5 - Documentos`)
        console.log(`| 6 - Telefones`)
        console.log(`----------------------`)
        console.log(`| 0 - Voltar`)
    }
}