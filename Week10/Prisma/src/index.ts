import { PrismaClient } from "@prisma/client";
import { string } from "zod";

const prisma = new PrismaClient();

async function insertUser(email:string,firstName:string,lastName:string,password:string) {
    const res = await prisma.user.create({
        data:{
            email,
            firstName,
            lastName,
            password
        },
        select:{
            id:true
        }
    })

    console.log(res);
}

// insertUser("vinay123@gmail.com","vinay","kumar","vinay1234");


// Updating a row

interface updateParams{
    firstName:string,
    lastName:string
}

async function updateUser(email:string,x:updateParams) {
    const res = await prisma.user.update({
        where: {email:email},
        data:x
    }
    );

    console.log(res);
}

// updateUser("vinay@gmail.com",{firstName:"Vinay",lastName:"Kumar"})


async function deleteUser(email:string) {
    const res = await prisma.user.delete({
        where:{email:email}
    });

    console.log(res);
}

// deleteUser("vinay@gmail.com");

// Getting user details
async function getUser(email:string) {
    const res = await prisma.user.findFirst({
        where:{email:email}
    });

    console.log(res);
}

getUser("vinay12@gmail.com");
