const { response,request } = require('express')

const usuariosGet = (req = request, res = response) => {
    const {nombre='No name',edad="No edad"} = req.query;
  console.log("usuariosGet");
  res.json({
    ok: true,
    msg: "get API - Controller",
    nombre,
    edad
  });
};

const usuariosPut = (req, res) => {
    const id = req.params.id;
    console.log(id)
  res.json({
    ok: true,
    msg: "put API",
  });
};

const usuariosDelete = (req, res) => {
  res.status(500).json({
    ok: true,
    msg: "delete API",
  });
};

const usuariosPost = (req, res) => {
    const {nombre, edad} = req.body;
    res.json({
        msg:'POST API - UsuarioPost',
        body:nombre,edad
  });
};

module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}