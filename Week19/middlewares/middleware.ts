import { NextResponse } from "next/server";

let reC = 0;
export default function Middleware() {
    reC++;
    
    console.log('Request Count:', reC);
    return NextResponse.next()
}