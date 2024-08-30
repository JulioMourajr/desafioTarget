
// questão 1 - sequencia de Fibonacci

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

// Questão 2 

const palavra = "Esta é uma string de exemplo com alguns caracteres 'a'.";
const letraPadrao = 'a';

const contador = (palavra.match(new RegExp(letraPadrao, 'gi')) || []).length;

console.log(`A letra '${letraPadrao}' ocorre ${contador} vez(es) na string.`);

/*questão 3

Inicialização:
INDICE = 12
SOMA = 0
K = 1
Loop: O loop continuará enquanto o K for menor que 12).
Teste de Mesa
1ª iteração: K = 1, SOMA = 0 + 1 → SOMA = 1, K = 2
2ª iteração: K = 2, SOMA = 1 + 2 → SOMA = 3, K = 3
3ª iteração: K = 3, SOMA = 3 + 3 → SOMA = 6, K = 4
4ª iteração: K = 4, SOMA = 6 + 4 → SOMA = 10, K = 5
5ª iteração: K = 5, SOMA = 10 + 5 → SOMA = 15, K = 6
6ª iteração: K = 6, SOMA = 15 + 6 → SOMA = 21, K = 7
7ª iteração: K = 7, SOMA = 21 + 7 → SOMA = 28, K = 8
8ª iteração: K = 8, SOMA = 28 + 8 → SOMA = 36, K = 9
9ª iteração: K = 9, SOMA = 36 + 9 → SOMA = 45, K = 10
10ª iteração: K = 10, SOMA = 45 + 10 → SOMA = 55, K = 11
11ª iteração: K = 11, SOMA = 55 + 11 → SOMA = 66, K = 12
Fim do Loop: O loop termina quando K se torna 12, saindo do loop.
Com isso o valor da variável SOMA é 66.

*/

/*
questão 4
4) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, 9
b) 2, 4, 8, 16, 32, 64, 128
c) 0, 1, 4, 9, 16, 25, 36, 49
d) 4, 16, 36, 64, 100
e) 1, 1, 2, 3, 5, 8, 13
f) 2,10, 12, 16, 17, 18, 19, 20

*/

// questão 5 - reverter string

Para descobrir qual interruptor acende cada lâmpada, basta seguir estes passos:

Aqueça uma: Ligue o primeiro interruptor por alguns minutos para esquentar a lâmpada correspondente.
Ligue outra: Desligue o primeiro e ligue o segundo interruptor.
Agora é só Investigar: Vá até as lâmpadas: a acesa é do segundo interruptor, 
a quente do primeiro e a fria do terceiro (que nunca foi ligado).
