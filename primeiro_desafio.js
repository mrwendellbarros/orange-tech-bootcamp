
const precoCombustivel = 5.79;
const gastoMedio = 10;
const viagem = 100;

const litros = viagem / gastoMedio;

const valorGasto = litros * precoCombustivel;

console.log(valorGasto.toFixed(2));