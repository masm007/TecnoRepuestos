const calcularStockDisponible = (
  stockActual,
  cantidadVendida
) => {
  return stockActual - cantidadVendida;
};

const calcularTotalCompra = (productos) => {
  return productos.reduce((acc, producto) => {
    return acc + (producto.precio * producto.cantidad);
  }, 0);
};

module.exports = {
  calcularStockDisponible,
  calcularTotalCompra
};