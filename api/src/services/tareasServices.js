const tareasRepository = require("../repositories/tareasRepository");

exports.obtenerTareas = async () => {
    const response = await tareasRepository.obtenerTareas();
    return response;
}
exports.obtenerTareaId = async (id) => {
    const exists = await tareasRepository.obtenerTareaId(id);
    if(exists.length === 0){
        console.log("La tarea no existe");
    }
    const response = await tareasRepository.obtenerTareaId(id);
    return response;
}
exports.crearTarea = async (tarea) => {
    const response = await tareasRepository.crearTarea(tarea);
    return response;w
}
exports.editarTarea = async (id,tarea) => {
    const exists = await tareasRepository.obtenerTareaId(id);
    if(exists.length === 0){
        console.log("La tarea no existe");
    }
    const response = await tareasRepository.editarTarea(id,tarea);
    return response;
}
exports.eliminarTarea = async (id) => {
    const exists = await tareasRepository.obtenerTareaId(id);
    if(exists.length === 0){
        console.log("La tarea no existe");
    }
    const response = await tareasRepository.eliminarTarea(id);
    return response;
}