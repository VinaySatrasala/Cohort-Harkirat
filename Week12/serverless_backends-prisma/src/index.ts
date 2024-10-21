import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function addUser(name:string) {
    const res = await prisma.user.create({
        data:{
            name
        },
        select:{
            id:true
        }
    });

    console.log(res);
}

addUser("Vinay");