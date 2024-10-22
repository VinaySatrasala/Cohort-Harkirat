import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";


interface Env {
    DATABASE_URL : string
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const prisma = new PrismaClient({
			datasourceUrl : env.DATABASE_URL
		}).$extends(withAccelerate());

		const res = await prisma.log.create({
			data:{
				level:"Info",
				message : `${request.method} ${request.url}`,
				meta:{
					headers : JSON.stringify(request.headers) 
				}
			}
		})
		console.log(JSON.stringify(res))
		return new Response(`request method : ${request.method}`);
	},
} satisfies ExportedHandler<Env>;
