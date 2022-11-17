const precoEtanol = 5.79
const precoGasolina = 6.66
const gastoMedio = 10
const viagem = 100
const tipoCombustivel = 'Gasolina'

const litros = viagem / gastoMedio

if (tipoCombustivel === 'Etanol') {
  const valorGasto = litros * precoEtanol;
  console.log(valorGasto.toFixed(2))
} else {
  const valorGasto = litros * precoGasolina;
  console.log(valorGasto.toFixed(2))
}

console.log(valorGasto.toFixed(2))
