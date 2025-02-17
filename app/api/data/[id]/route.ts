import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// DELETE Method:
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
   const id = Number(params.id);

    if (isNaN(id)) {
      return new Response(JSON.stringify({ error: "Invalid ID" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const deletedWord = await prisma.word.delete ({
      where :{id }
    })

    return new Response(
      JSON.stringify({ message: "Word deleted successfully", deletedWord }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    )
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

// Update Method:
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    const data = await request.json();

    if (isNaN(id)) {
      return new Response(JSON.stringify({ error: "Invalid ID" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const updatedWord = await prisma.word.update({
      where: { id },
      data,
    });

    return new Response(
      JSON.stringify({ message: "Word updated successfully", updatedWord }),
      {
        status: 200,
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