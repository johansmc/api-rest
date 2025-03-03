const e = require("express");

exports.obtenerTareas = async () =>{
    return new Promise((resolve,reject)=>{
        const q = "SELECT * FROM tarea";
        global.db.query(q,(err,results)=>{
            if(err){
                reject(err);
            }else{
                resolve(results);
            }
        });
    })
}
exports.obtenerTareaId = async (id) =>{
    return new Promise((resolve,reject)=>{
        const q = "SELECT * FROM tarea WHERE id = ?";
        global.db.query(q,id,(err,results)=>{
            if(err){
                reject(err);
            }else{
                resolve(results[0]);
            }
        });
    })
}
exports.crearTarea = async (tarea) => {
    return new Promise((resolve,reject)=>{
        const q = "INSERT INTO tarea ( nombre, descripcion, puntos) VALUES(?,?,?)";
        const values = [tarea.nombre, tarea.descripcion, tarea.puntos];
        global.db.query(q,values,(err,results)=>{
            if(err){
                reject(err);
            }else{
                resolve(results);
            }
        });
    })
}
exports.editarTarea = async (id,tarea) =>{
    return new Promise((resolve,reject)=>{
        const q = "UPDATE tarea SET nombre = ?, descripcion = ?, puntos = ? WHERE id = ?";
        const values = [tarea.nombre, tarea.descripcion, tarea.puntos,id];
        global.db.query(q,values,(err,results)=>{
            if(err){
                reject(err);
            }else{
                resolve(results);
            }
        });
    })
}
exports.eliminarTarea = async (id) => {
    return new Promise((resolve,reject)=>{
        const q = "DELETE FROM tarea WHERE id = ?";
        global.db.query(q,[id],(err,results)=>{
            if(err){
                reject(err);
            }else{
                resolve(results);
            }
        });
    })
}