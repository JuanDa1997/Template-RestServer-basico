const express = require("express");
const cors = require("cors");
class Server {
  constructor() {
    // crear aplicacion de express
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";
    //Middleware
    this.middlewares();
    //Rutas de mi aplicacion
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //LECTURA Y PARSEO
    this.app.use(express.json());

    //Direectorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
