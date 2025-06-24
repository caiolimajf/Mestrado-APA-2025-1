const { performance } = require('perf_hooks');

// implementação recursiva

function avaliacaoPolinomioRecursiva(coeficientes,x,i = 0) {
    const n = coeficientes.length;
    if (i === n - 1) {
        return coeficientes[i]; 
    }
    return coeficientes[i] + x * avaliacaoPolinomioRecursiva(coeficientes, x, i + 1);
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
const resultado = avaliacaoPolinomioRecursiva(polinomio,coeficiente);
const fimExecucao = performance.now();
console.log("O resultado é: " + resultado);
console.log(`Tempo de execução: ${(fimExecucao - inicioExecucao).toFixed(2)} ms`);
