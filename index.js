import { server as _server } from "hapi";
import routes from "./routes";

// Create a server with a host and port
const server = _server({
    host: "localhost",
    port: 8000,
    routes: { cors: true }
});

// Start the server
async function start() {
    try {
        // Add the route
        server.route(routes);

        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log("Server running at:", server.info.uri);
}

start();
