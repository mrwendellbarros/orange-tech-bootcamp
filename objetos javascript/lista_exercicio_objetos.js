class Carro {
  marca
  cor 
  gastoMedioPorKm

  constructor(marca, cor, gastoMedioPorKm){
    this.marca = marca
    this.cor = cor
    this.gastoMedioPorKm = gastoMedioPorKm
  }

  calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
    return (distanciaEmKm * this.gastoMedioPorKm) * precoCombustivel
  }
}

const uno = new Carro('Fiat', 'Prata', 1 / 12)
const palio = new Carro('Fiat', 'Preto', 1 / 10)

palio.calcularGastoDePercurso(70, 5)
uno.calcularGastoDePercurso(70, 5)