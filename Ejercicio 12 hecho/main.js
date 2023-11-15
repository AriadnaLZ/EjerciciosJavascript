// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función: pista (cuando eliminamos algo de un array, su longitud se verá afectada)

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(param) {
  let noDuplicatesArray = []
  for (const element of param) {
    if (!noDuplicatesArray.includes(element)) {
      noDuplicatesArray.push(element)
    }
  }
  console.log(noDuplicatesArray)
  return noDuplicatesArray
}

removeDuplicates(duplicates)