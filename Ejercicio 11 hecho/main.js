// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. pista (typeof)

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  let sum = 0
  for (const element of param) {
    if (typeof element === 'string') {
      let longest = element.length
      sum += longest
    } else if (typeof element === 'number') {
      sum += element
    }
  }
  console.log(sum)
  return sum
}

averageWord(mixedElements)