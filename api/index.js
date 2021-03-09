const { ServiceBroker } = require("moleculer");
const ApiService = require("moleculer-web");

const broker = new ServiceBroker({
    namespace: "dev",
    nodeID: "node-1",

    logger: true,
    logLevel: "info",

    requestTimeout: 5 * 1000,

    // metrics: {
    //     enabled: true,
    //     reporter: ["Console"],
    // },

    errorHandler(err, info) {
        this.logger.warn("Error handled:", err);
        this.logger.warn("Error info:", info);
        throw err;
    },
});

broker.loadServices("./services", "**.service.js");
broker.createService({
    name: "api",
    mixins: [ApiService],
    settings: {
        port: 3000,
    },
    routes: [
        {
            path: "/api",
            bodyParsers: {
                json: {
                    strict: false,
                },
                urlencoded: {
                    extended: false,
                },
            },
        },
    ],
});

broker.start();
