// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];


const tipeOfFilm = (param) => {
  const peliculaPequeña = [];
  const peliculaMediana = [];
  const peliculaGrande = [];
  
  for (const film of param) {
    if (film.durationInMinutes < 100) {
      peliculaPequeña.push(film.name)
    } else if (film.durationInMinutes > 100 && film.durationInMinutes < 200) {
      peliculaMediana.push(film.name)
    } else {
      peliculaGrande.push(film.name)
    }
  }
  if (peliculaPequeña.length > 0) {
    console.log(`Las películas con duración menor de 100 min son: ${peliculaPequeña}.`)
  } else {
    console.log('No hay películas de menos de 100 minutos.')
  }
  if (peliculaMediana.length > 0) {
    console.log(`Las películas con duración mayor de 100 minutos y menor de  200 minutos son: ${peliculaMediana}.`)
  } else {
    console.log('No hay películas de más de 100 minutos y menos de 200 minutos.')
  }
  if (peliculaGrande.length > 0) {
    console.log(`Las películas con duración mayor de 200 min son: ${peliculaGrande}.`)
  } else {
    console.log('No hay películas de más de 200 minutos.')
  }
  return peliculaPequeña, peliculaMediana, peliculaGrande
}

tipeOfFilm(movies)


