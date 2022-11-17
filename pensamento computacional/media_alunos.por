programa {
  funcao inicio() {
    real a, b, nota_1, nota_2
    escreva("Digite a nota do p1 e p2 do aluno A: ")
    leia(a)
    leia(b)
    escreva("Digite a nota do p1 e p2 do aluno B: ")
    leia(nota_1)
    leia(nota_2)

    escreva("Média do aluno A: ", media_aluno(a,b))
    escreva("\nMédia do aluno B: ", media_aluno(nota_1,nota_2))
  }
  funcao real media_aluno(real nota_a, real nota_b){
      retorne (nota_a + nota_b) / 2
  }
}
