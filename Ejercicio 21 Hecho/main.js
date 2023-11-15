// Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto
// "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const mayorOMenor = (param) => {
  let mayoresEdad = []
  let menoresEdad = []
  for (const person of param) {
    if (person.years < 18)  {
      menoresEdad.push(person.name)
    } else {
      mayoresEdad.push(person.name)
    }
  }
  console.log(`Usuarios mayores de edad: ${mayoresEdad}`)
  console.log(`Usuarios menores de edad: ${menoresEdad}`)
}

mayorOMenor(users)