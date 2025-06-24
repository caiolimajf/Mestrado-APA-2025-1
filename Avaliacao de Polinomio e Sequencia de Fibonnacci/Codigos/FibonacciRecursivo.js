const { performance } = require('perf_hooks');

// implementação recursiva
function fibonacciRecursiva(numero) {
    if(numero <= 0){
        return 0;
    }
    if(numero == 1){
        return 1;
    }
    return fibonacciRecursiva(numero - 1) + fibonacciRecursiva(numero - 2);
}

const numero = 40; // Numero 40

const inicioExecucao = performance.now();
const resultado = fibonacciRecursiva(numero);
const fimExecucao = performance.now();

console.log("O resultado é: " + resultado);
console.log(`Tempo de execução: ${(fimExecucao - inicioExecucao).toFixed(2)} ms`);