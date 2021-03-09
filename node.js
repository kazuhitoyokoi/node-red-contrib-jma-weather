module.exports = function (RED) {
    'use strict';
    var fs = require('fs');
    var path = require("path");
    var flow = fs.readFileSync(path.join(__dirname, "subflow.json"));
    RED.nodes.registerSubflow(JSON.parse(flow));
};
