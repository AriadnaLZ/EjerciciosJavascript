// Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  let longestWord = ''
  for (const word of param) {
    if (longestWord.length < word.length){
      longestWord = word
    }
  }
  console.log(longestWord)
  return longestWord
}

findLongestWord(avengers)