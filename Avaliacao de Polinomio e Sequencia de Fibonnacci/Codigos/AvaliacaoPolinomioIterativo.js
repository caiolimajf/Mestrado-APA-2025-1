const { performance } = require('perf_hooks');

// implementação iterativa

function avaliarPolinomioIterativo(coeficientes, x) {
    let resultado = 0;
    const n = coeficientes.length;

    for (let i = 0; i < n; i++) {
        let potencia = 1;
        for (let j = 0; j < i; j++) {
            potencia *= x;
        }
        resultado += coeficientes[i] * potencia;
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
const resultado = avaliarPolinomioIterativo(polinomio, coeficiente);
const fimExecucao = performance.now();
console.log("O resultado é: " + resultado);
console.log(`Tempo de execução: ${(fimExecucao - inicioExecucao).toFixed(2)} ms`);