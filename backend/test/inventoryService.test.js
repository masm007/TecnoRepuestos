const {
  calcularStockDisponible,
  calcularTotalCompra
} = require("../src/services/inventoryService");

describe("Pruebas unitarias del inventario", () => {

  test("Debe calcular el stock disponible", () => {
    const resultado =
      calcularStockDisponible(50, 10);

    expect(resultado).toBe(40);
  });

  test("Debe calcular el total de una compra", () => {

    const productos = [
      { precio: 20, cantidad: 2 },
      { precio: 15, cantidad: 3 }
    ];

    const total =
      calcularTotalCompra(productos);

    expect(total).toBe(85);
  });

});