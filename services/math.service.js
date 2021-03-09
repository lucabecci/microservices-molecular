const { Service } = require("moleculer");

class MathService extends Service {
    constructor(broker) {
        super(broker);

        this.parseServiceSchema({
            name: "math",
            settings: {
                rest: "math/",
            },
            actions: {
                add: {
                    rest: "POST /added",
                    params: {
                        a: "number",
                        b: "number",
                    },
                    handler: this.add,
                },
            },
        });
    }

    add(ctx) {
        return Number(ctx.params.a) + Number(ctx.params.b);
    }
}

module.exports = MathService;
