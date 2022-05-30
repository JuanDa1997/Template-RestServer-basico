const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "N/A", apikey } = req.query;

  res.json({
    msg: "get API - controlador",
    q,
    nombre,
    apikey,
  });
};

const usuariosPut = (req, res) => {
  const { id } = req.params;

  res.json({
    msg: "put API - usuariosPut",
    id,
  });
};

const usuariosPost = (req, res) => {
  const { nombre } = req.body;

  res.json({
    msg: "post API - usuariosPost",
    nombre,
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msg: "delete API",
  });
};

const usuariosPatch = (req, res) => {
  res.json({
    msg: "patch API",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
