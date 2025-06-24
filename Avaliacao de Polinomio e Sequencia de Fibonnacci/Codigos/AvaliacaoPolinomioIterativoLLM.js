const { performance } = require('perf_hooks');

// implementação iterativa
// LLM utilizada: Claude

function avaliarPolinomioIterativoLLM(coeficientes, x) {
    let resultado = 0;
    for (let i = coeficientes.length - 1; i >= 0; i--) {
        resultado = resultado * x + coeficientes[i];
    }
    return resultado;
}

function gerarPolinomio(n) {
    const coeficientes = [];
    for (let i = 0; i < n; i++) {
        const coef = ((i % 2 === 0) ? 1 : -1) * (i + 1);
        coeficientes.push(coef);
    }
    return coeficientes;
}

const grau = 1000; 
const polinomio = gerarPolinomio(grau);
const coeficiente = 1.0001;

const inicioExecucao = performance.now();
const resultado = avaliarPolinomioIterativoLLM(polinomio, coeficiente);
const fimExecucao = performance.now();
console.log("O resultado é: " + resultado);
console.log(`Tempo de execução: ${(fimExecucao - inicioExecucao).toFixed(2)} ms`);