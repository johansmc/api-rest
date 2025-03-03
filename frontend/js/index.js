
async function getTareas() {
    const response = await fetch('http://localhost:4400/api/task');
    const tareas = await response.json();
    console.log(tareas);
    const tbody = document.querySelector('tbody');
    tareas.forEach(tarea => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${tarea.id}</td>
        <td>${tarea.nombre}</td>
        <td>${tarea.descripcion}</td>
        <td>${tarea.puntos}</td>
        <td>
            <a href="actualizar.html?id=${tarea.id}" class="btn btn-primary">Editar</a>
            <button onclick="eliminarTarea(${tarea.id})" id="eliminarTarea${tarea.id}" class="btn btn-danger" onclick="eliminarTarea(${tarea.id})">Eliminar</button>
        </td>
        `;
        tbody.appendChild(tr);
    });
}
async function agregarTarea(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const tarea = {
        nombre: formData.get('nombre'),
        descripcion: formData.get('descripcion'),
        puntos: formData.get('puntos')
    };

    console.log("Datos a enviar:", tarea); 

    fetch('http://localhost:4400/api/task/crear', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(tarea) 
    })
    .then(response => response.json())
    .then(data => {
        console.log("Respuesta del servidor:", data);
        alert("Tarea creada");
        window.location.href = "index.html";
    })
    .catch(error => {
        console.error("Error al agregar tarea:", error);
    });
}


function obtenerIdDesdeURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id'); 
}
async function getTarea() {
    const id = obtenerIdDesdeURL(); 
    if (!id) return; 

    try {
        const response = await fetch(`http://localhost:4400/api/task/${id}`);
        const tarea = await response.json();

        console.log("Tarea obtenida:", tarea);

        document.getElementById('nombre').value = tarea.nombre;
        document.getElementById('descripcion').value = tarea.descripcion;
        document.getElementById('puntos').value = tarea.puntos;
    } catch (error) {
        console.error("Error al obtener la tarea:", error);
    }
}
async function actualizarTarea(event) {
    event.preventDefault();
    const id = obtenerIdDesdeURL();
    if (!id) {
        console.error("No se encontró el ID de la tarea.");
        return;
    }

    const formData = new FormData(event.target);
    const tarea = {
        nombre: formData.get('nombre'),
        descripcion: formData.get('descripcion'),
        puntos: formData.get('puntos')
    };

    fetch(`http://localhost:4400/api/task/editar/${id}`, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarea)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Tarea actualizada:", data);
        alert("Tarea actualizada");
        window.location.href = "index.html";
    })
    .catch(error => {
        console.error("Error al actualizar tarea:", error);
    });
}

async function eliminarTarea(id) {
    fetch(`http://localhost:4400/api/task/eliminar/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log("Tarea eliminada:", data);
        alert("Tarea eliminada");
        window.location.href = "index.html";
    })
    .catch(error => {
        console.error("Error al eliminar tarea:", error);
    });
}



document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("formulario")) {
        document.getElementById("formulario").addEventListener("submit", actualizarTarea);
        getTarea(); 
    }

    if (document.getElementById("formularioCrear")) {
        document.getElementById("formularioCrear").addEventListener("submit", agregarTarea);
    }

    if (document.querySelector("tbody")) {
        getTareas();
    }

});



document.addEventListener("DOMContentLoaded", getTarea);


