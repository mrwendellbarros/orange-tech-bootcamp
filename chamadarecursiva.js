let n = 10
let cont = 0

function somatorio(n) {
  for (let i = n; i > 0; i--) {
    cont += i
  }
  return cont
}
console.log(somatorio(n))