
const { gets, print } = require('./funcoes-auxiliares')

const numeroSorteado = []

for (let i = 0; i < 5; i++) {
  const numeroSorteado = gets()
  numeroSorteado.push(numeroSorteado)  
}

let maiorValor = 0

for (let i = 0; i < numeroSorteado.length; i++) {
  const numeroSorteado = numeroSorteado[i];
  if ( numeroSorteado > maiorValor ){
    maiorValor = numeroSorteado
  }
}

console.log(maiorValor)