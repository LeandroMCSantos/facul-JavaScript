// Variáveis globais
let history = [];

// Função para calcular com operação matemática e lógica
function calcular(operador) {
    // Variáveis para pegar valores do DOM
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    let resultado;

    // Estrutura condicional para operações
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira dois números válidos.");
        return;
    }

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero";
            break;
        default:
            resultado = "Operação inválida";
    }

    // Atualiza o DOM com o resultado
    document.getElementById('result').innerText = resultado;

    // Adiciona ao histórico
    adicionarAoHistorico(num1, num2, operador, resultado);
}

// Função para adicionar operação ao histórico
function adicionarAoHistorico(num1, num2, operador, resultado) {
    const operacao = `${num1} ${operador} ${num2} = ${resultado}`;
    history.push(operacao);  // Manipulação de array

    // Atualiza o DOM para mostrar histórico
    const historyElement = document.getElementById('history');
    const listItem = document.createElement('li');
    listItem.textContent = operacao;
    historyElement.appendChild(listItem);
}

// Exemplo de estrutura de repetição para exibir histórico em console
history.forEach(op => console.log(op));

// Evento para limpar histórico ao carregar a página
window.addEventListener('load', () => {
    history = [];
    document.getElementById('history').innerHTML = '';
});
