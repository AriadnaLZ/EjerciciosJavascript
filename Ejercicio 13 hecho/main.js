// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(word, param) {
  let indexWord = 0
  if (param.includes(word)) {
    indexWord = param.indexOf(word)
    console.log(true, indexWord)
    return true, indexWord
  } else {
    console.log(false)
    return false
    }
}

finderName('Marc', nameFinder)