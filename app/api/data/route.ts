import { NextRequest } from "next/server";
import { prisma } from "@/utilities/prismaClient";
import { Prisma } from "@prisma/client"; // ✅ Импорт Prisma для типов

// GET Method:
export async function GET(request: NextRequest) {

 const page = Number(request.nextUrl.searchParams.get("page")) || 1;
 const limit = Number(request.nextUrl.searchParams.get("limit")) || 10;
 const sort =
  (request.nextUrl.searchParams.get("sort") as Prisma.SortOrder) || "desc"; 


 const skip = (page - 1) * limit;
 const take = limit;

  try {
    const [words, totalCount] = await prisma.$transaction([
      prisma.word.findMany({
        skip,
        take,
        orderBy: { id: sort },
      }),
      prisma.word.count(),
    ]);

    // Вычисление общего количества страниц
    const totalPages = Math.ceil(totalCount / limit);


    return new Response(JSON.stringify({words, totalPages}), {
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
export async function POST(request: NextRequest) {
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
