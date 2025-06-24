const { performance } = require('perf_hooks');

// implementação iterativa
// LLM utilizada: Claude

function fibonacciIterativoLLM(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}


const numero = 40; // Numero 40

const inicioExecucao = performance.now();
const resultado = fibonacciIterativoLLM(numero);
const fimExecucao = performance.now();

console.log("O resultado é: " + resultado);
console.log(`Tempo de execução: ${(fimExecucao - inicioExecucao).toFixed(2)} ms`);