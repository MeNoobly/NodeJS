import http from "http";
import EventEmitter from "events";

class Application {
    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._createServer();
        this.middlewares = [];
    }

    use(middleware) {
        this.middlewares.push(middleware);
    }

    listen(port, callback) {
        this.server.listen(port, callback);
    }

    addRouter(router) {
        Object.keys(router.endpoints).forEach((path) => {
            const endpoint = router.endpoints[path];
            Object.keys(endpoint).forEach((method) => {
                this.emitter.on(
                    this._getRouteMask(path, method),
                    (request, response) => {
                        const handler = endpoint[method];
                        handler(request, response);
                    }
                );
            });
        });
    }

    _createServer() {
        return http.createServer((request, response) => {
            let body = "";

            request.on("data", (chunk) => {
                body += chunk;
            });

            request.on("end", () => {
                if (body) {
                    request.body = JSON.parse(body);
                }

                this.middlewares.forEach((middleware) =>
                    middleware(request, response)
                );

                const emitted = this.emitter.emit(
                    this._getRouteMask(request.pathname, request.method),
                    request,
                    response
                );

                if (!emitted) {
                    response.end();
                }
            });
        });
    }

    _getRouteMask(path, method) {
        return `[${path}]:[${method}]`;
    }
}

export default Application;
