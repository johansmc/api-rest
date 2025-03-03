const Connect = require("./src/config/db");
const createApp = require("./src/app");
const port = 4400;

const startServer = async () => {
    try {
        await Connect();
        const app = createApp();
        app.listen(port, () => {
            console.log(`Servidor corriendo en http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
startServer();