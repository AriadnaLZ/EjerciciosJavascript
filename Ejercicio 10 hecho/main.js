// Calcular un promedio (media)

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let sum = 0
  let media = 0
    for (const number of param) {
      sum += number
    }
    media = sum / param.length
    console.log(media)
    return media
 }

 average(numbers)