import { createClient } from "redis";

const client = createClient();

client.on('error', (err: any) => console.log(err));

async function connect() {
    await client.connect();
}

async function publish(key: string, val: string) {
    await client.publish(key, val);
}

async function start() {
    await connect(); // ✅ ensure connection
    let inc: number = 10;
    setInterval(() => {
        publish('APPL', inc.toFixed(2)); // now safe
        inc += 0.1;
    }, 1000);
}


async function subscribe(key : string) {
    await connect();
    await client.SUBSCRIBE(key,(message)=>{console.log(message)});
}


subscribe('APPL');
