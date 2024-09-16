let dinheiro = parseFloat(prompt("Digite a quantidade inicial de dinheiro disponível:"))

function mostrarMenu() {
    let opcao = prompt(`Você tem R$${dinheiro.toFixed(2)}\nEscolha uma opção:\n1. Adicionar dinheiro\n2. Remover dinheiro\n3. Sair`)
    return opcao
}

function adicionarDinheiro() {
    let valor = parseFloat(prompt("Digite a quantidade de dinheiro a ser adicionada:"))
    dinheiro += valor
}

function removerDinheiro() {
    let valor = parseFloat(prompt("Digite a quantidade de dinheiro a ser removida:"))
    dinheiro -= valor
}

while (true) {
    let opcao = mostrarMenu()
    if (opcao === '1') {
        adicionarDinheiro()
    } else if (opcao === '2') {
        removerDinheiro()
    } else if (opcao === '3') {
        alert("Programa encerrado.")
        break
    } else {
        alert("Opção inválida. Tente novamente.")
    }
}