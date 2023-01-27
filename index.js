const { Plugin } = require("../../../server/plugin");
const { log } = require("../../../src/util");

class ExamplePlugin extends Plugin {

    server;

    /**
     *
     * @param {UptimeKumaServer} server
     */
    constructor(server) {
        super();
        this.server = server;
    }

    async load() {
        log.debug("example-plugin", "Load event");

        this.server.app.get("/example-plugin-route", (req, res) => {
            res.send("Hi, this route is added by a plugin.");
        });
    }

    async unload() {
        log.debug("example-plugin", "Unload event");
    }
}

module.exports = ExamplePlugin;
