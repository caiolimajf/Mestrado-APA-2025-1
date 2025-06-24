const { performance } = require('perf_hooks');

// implementação iterativa
function fibonacciIterativo(n) {
    if (n <= 1) {
        return n;
    }
    let anterior = 0;
    let atual = 1;
    for (let i = 2; i <= n; i++) {
        const proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }
    return atual;
}

const numero = 40; // Numero 40

const inicioExecucao = performance.now();
const resultado = fibonacciIterativo(numero);
const fimExecucao = performance.now();
console.log("O resultado é: " + resultado);
console.log(`Tempo de execução: ${(fimExecucao - inicioExecucao).toFixed(2)} ms`);