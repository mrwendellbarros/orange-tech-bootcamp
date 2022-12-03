let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = 4

function sequencial(valor) {
  let qtd = elementos.length - 1
  for (let i = 0; i < elementos.length; i++) {
    let n = elementos[i];
    if (valor === n) {
      return `Achei ${valor} na posicao ${i}`
      break
    } else if (i === qtd && valor != n) {
      return `Numero ${valor} nao encontrado!`
    }
  }
}

console.log(sequencial(valor))