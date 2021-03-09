const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker({
    nodeID: "node-1",
    transporter: "nats://localhost:4222",
    logLevel: "debug",
    requestTimeout: 5 * 1000,
    errorHandler(err, info) {
        // Handle the error
        this.logger.warn("Error handled:", err);
        this.logger.warn("Error info:", info);
    },
});
