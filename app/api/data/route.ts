import { PrismaClient } from "@prisma/client";

// Используем один экземпляр Prisma (глобально)
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// GET Method:

export async function GET() {
  try {
      const words = await prisma.word.findMany();
  
    return new Response(JSON.stringify(words), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

}

// POST Method:

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.word || !data.translate || !data.tag) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const newWord = await prisma.word.create({
      data: {
        word: data.word,
        translate: data.translate,
        tag: data.tag,
      },
    });

    return new Response(
      JSON.stringify({ message: "Post added Successfully", newWord }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
