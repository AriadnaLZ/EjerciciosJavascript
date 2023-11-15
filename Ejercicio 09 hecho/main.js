// Implementa la función denominada sumAll que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let sum = 0
  for (const number of param) {
    sum += number
  }
  console.log(sum)
  return sum
}

sumAll(numbers)