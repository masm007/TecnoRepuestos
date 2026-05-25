const request = require("supertest");
const app = require("../src/app");

describe("Prueba de integración", () => {

  test("Debe crear un producto", async () => {

    const response = await request(app)
      .post("/api/productos")
      .send({
        nombre: "Laptop",
        precio: 500
      });

    expect(response.statusCode)
      .toBe(201);

    expect(response.body.message)
      .toBe("Producto creado");

  });

});