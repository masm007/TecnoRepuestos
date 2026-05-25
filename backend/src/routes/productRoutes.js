const express = require("express");

const router = express.Router();

router.post("/productos", (req, res) => {

  const producto = req.body;

  return res.status(201).json({
    message: "Producto creado",
    producto
  });

});

module.exports = router;