"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
exports.handle = async function (event, context) {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2));
    const url = 'https://reqbin.com/echo/get/json';
    try {
        const response = await axios_1.default.get(url);
    }
    catch (exception) {
        process.stderr.write(`ERROR received from ${url}: ${exception}\n`);
    }
    return context.logStreamName;
};
//# sourceMappingURL=app.js.map