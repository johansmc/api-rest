const tareasServices = require("../services/tareasServices");

exports.obtenerTareas = async (req, res) => {
try {
    const tareas = await tareasServices.obtenerTareas();
    res.status(200).json(tareas);
} catch (error) {
    res.status(500).json({ error: "Error al obtener las tareas" });
}
};

exports.obtenerTareaId = async (req, res) => {
try {
    const id  = req.params.id;
    const tarea = await tareasServices.obtenerTareaId(id);
    res.status(200).json(tarea);
} catch (error) {
    res.status(500).json({ error: "Error al obtener la tarea" });
}
};
exports.crearTarea = async (req, res) => {
try {
    const tarea = req.body;
    const response = await tareasServices.crearTarea(tarea);
    res.status(200).json(response);
} catch (error) {
    res.status(500).json({ error: "Error al crear la tarea" });
}
};
exports.editarTarea = async (req, res) => {
try {
    const id = req.params.id;
    const tarea = req.body;
    const response = await tareasServices.editarTarea(id,tarea);
    res.status(200).json(response);
} catch (error) {
    res.status(500).json({ error: "Error al editar la tarea" });
}
};
exports.eliminarTarea = async (req, res) => {
try {
    const id = req.params.id;
    const response = await tareasServices.eliminarTarea(id);
    res.status(200).json(response);
} catch (error) {
    res.status(500).json({ error: "Error al eliminar la tarea" });
}
}