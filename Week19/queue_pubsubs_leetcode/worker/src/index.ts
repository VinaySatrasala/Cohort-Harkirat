import {createClient} from "redis"


const client = createClient();


async function proccessSubmission(submission: string) {
    const body = JSON.parse(submission);
    await new Promise(resolve => setTimeout(resolve,1000));
    // code execution logic
    await client.publish('status',submission);
    console.log(body);
}



async function startWorker() {
    try{
        await client.connect();
        console.log("worket connected to redis");

        while(true){
            try {
                const submission = await client.brPop("submissions",0);
                await proccessSubmission(submission.element);
            } catch (error) {
                // need to implement some logic if something goes wrong and put back to queue
                console.log(error)
            }
        }
    }catch(e){
        console.log("Failed to connect to redis.")
    }
}

startWorker()

