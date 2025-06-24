const { performance } = require('perf_hooks');

// implementação iterativa
// LLM utilizada: DeepSeek

function fibonacci(n) {
    // Casos base: fib(0) = 0 e fib(1) = 1
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    // Passo recursivo: fib(n) = fib(n-1) + fib(n-2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Exemplo de uso:
const posicao = 40; // Número 40

const inicioExecucao = performance.now();
console.log(`O ${posicao}º número de Fibonacci é ${fibonacci(posicao)}`);
const fimExecucao = performance.now();
console.log(`Tempo de execução: ${(fimExecucao - inicioExecucao).toFixed(2)} ms`);