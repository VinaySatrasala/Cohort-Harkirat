import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/db";
import z from "zod";

// Create a single Prisma client instance

export async function GET() {
    const res = await prisma.user.findMany({})
    return NextResponse.json(
        {
            respose : res
        }
    )

}

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(process.env.NODE_ENV)
    console.log(process)
    // Define Zod schema
    const schema = z.object({
        username: z.string().min(1, "Username is required"),
        password: z.string().min(1, "Password is required")
    });

    // Validate request body
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ error: "Invalid input", details: validation.error.errors }, { status: 400 });
    }

    try {
        const user = await prisma.user.create({
            data: {
                username: validation.data.username,
                password: validation.data.password,
            },
        });

        console.log(user.id);

        return NextResponse.json({ message: "Signed up" });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }
}
