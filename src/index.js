const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker({
    namespace: "dev",
    nodeID: "node-1",

    logger: true,
    logLevel: "debug",

    transporter: "nats://localhost:4222",

    requestTimeout: 5 * 1000,

    metrics: {
        enabled: true,
        reporter: ["Console"],
    },

    errorHandler(err, info) {
        // Handle the error
        this.logger.warn("Error handled:", err);
        this.logger.warn("Error info:", info);
        throw err;
    },
});
