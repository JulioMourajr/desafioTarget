// questão 1 - O valor da variavel soma será 91.

// questão 2 - sequencia de Fibonacci

function fazerFibonacci(numero) {
  let arrayFibonacci = []
  arrayFibonacci[0] = 0
  arrayFibonacci[1] = 1
  for (let i = 2; i < numero; i++) {
    arrayFibonacci[i] = arrayFibonacci[i - 2] + arrayFibonacci[i - 1]
  }
  return arrayFibonacci
}

let termo = fazerFibonacci(10)
console.log(termo)

/*questão 3

a) 1, 3, 5, 7, 9

b) 2, 4, 8, 16, 32, 64, 128

c) 0, 1, 4, 9, 16, 25, 36, 49

d) 4, 16, 36, 64, 100

e) 1, 1, 2, 3, 5, 8, 13

f) 2,10, 12, 16, 17, 18, 19, 200

*/

/*
questão 4

Utilizei a formula do sorvete para saber as distancias, para saber a equação horaria.

s(o) = V.t

O caminhão perde 5 minutos em cada 2 pedágios vamos calcular o tempo de viagem tirando os obstáculos: resultado 1,25h pela formula da velocidade media. vm = s/t

como perdeu 10 minutos, seu real tempo é 1,42h, resultando na velocidade media de 70,6 km/h.

com isso igualamos as formulas horarias e extraimos o ponto que o carro e caminhão se cruzam. Resposta = aproximadamente 61 km - Ribeirão Preto.
*/

// questão 5 - reverter string

function reverterString(palavra) {
  let novaPalavra = ''
  for (let i = palavra.length - 1; i >= 0; i--) {
    novaPalavra += palavra[i]
  }
  return novaPalavra
}

console.log(reverterString('Amor'))
