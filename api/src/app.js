const express = require ("express");
const cors = require ("cors");
const routes = require("./routes/routes");
const app = express();

const createApp = () =>{
    app.use(cors({
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials:true,
        allowedHeaders: ['Content-Type', 'Authorization'],
    }))

    app.use(express.json());

    //Rutas
    app.use("/api",routes);

    app.get("/", (req, res) => {
        res.status(200).json({
            message: "API de pruebas",
        });
});
    return app;
}
module.exports = createApp;