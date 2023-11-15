// Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas.

const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

const mediaVentas = (param) => {
  let cantidadTotalVentas = 0
  let media = 0
  for (const venta of param) {
    cantidadTotalVentas += venta.sellCount
  }
 media = cantidadTotalVentas / param.length
  console.log(`La media de ventas es: ${media}`)
  return media
}

mediaVentas(products)