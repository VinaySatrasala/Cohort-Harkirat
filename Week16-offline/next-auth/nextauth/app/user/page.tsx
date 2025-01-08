import { Appbar } from "@/components/Appbar";
import { getServerSession } from "next-auth";
import authOptions from "../lib/auth";

export default async function page() {
    const session =await getServerSession(authOptions)
    return (
        <div>
            <Appbar/>
            {JSON.stringify(session)}
        </div>
    )
}