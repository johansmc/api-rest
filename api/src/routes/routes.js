const express = require("express");
const tareasController = require("../controllers/tareasController");

const routes = express.Router();

routes.get("/task", tareasController.obtenerTareas);
routes.get("/task/:id", tareasController.obtenerTareaId);

routes.post("/task/crear", tareasController.crearTarea);
routes.put("/task/editar/:id", tareasController.editarTarea);
routes.delete("/task/eliminar/:id", tareasController.eliminarTarea);

module.exports = routes;