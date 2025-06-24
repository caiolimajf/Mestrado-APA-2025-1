const { performance } = require('perf_hooks');

// implementação recursiva
// LLM utilizada: DeepSeek

function avaliarPolinomio(coeficientes, x, grau = coeficientes.length - 1) {
    // Caso base: quando o grau é 0, retornamos o coeficiente constante
    if (grau === 0) {
        return coeficientes[grau];
    }

    // Passo recursivo: a_n * x^n + a_{n-1} * x^{n-1} + ... + a_0 = x * (a_n * x^{n-1} + ...) + a_0
    return x * avaliarPolinomio(coeficientes, x, grau - 1) + coeficientes[grau];
}

function gerarPolinomio(n) {
    const coeficientes = [];
    for (let i = 0; i < n; i++) {
        const coef = ((i % 2 === 0) ? 1 : -1) * (i + 1);
        coeficientes.push(coef);
    }
    return coeficientes;
}

// Exemplo de uso:
const grau = 1000; 
const coeficientes = gerarPolinomio(grau);
const x = 1.0001;

const inicioExecucao = performance.now();
const resultado = avaliarPolinomio(coeficientes, x);
const fimExecucao = performance.now();
console.log(`O polinômio avaliado em x = ${x} é ${resultado}`);
console.log(`Tempo de execução: ${(fimExecucao - inicioExecucao).toFixed(2)} ms`);