"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const client = (0, redis_1.createClient)();
client.on('error', (err) => console.log(err));
async function connect() {
    await client.connect();
}
async function publish(key, val) {
    await client.publish(key, val);
}
async function start() {
    await connect(); // ✅ ensure connection
    let inc = 10;
    setInterval(() => {
        publish('APPL', inc.toFixed(2)); // now safe
        inc += 0.1;
    }, 1000);
}
async function subscribe(key) {
    await connect();
    await client.SUBSCRIBE(key, (message) => { console.log(message); });
}
subscribe('APPL');
