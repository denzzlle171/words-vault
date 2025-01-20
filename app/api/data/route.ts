export async function GET() {

  try {
  const response = await fetch("https://676ad36abc36a202bb8360b2.mockapi.io/api/wv1/words")
    if (!response.ok) {
     throw new Error("Failed to fetch words");
    }
  
    const data = await response.json();
    
  return new Response(JSON.stringify(data),{
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
     return new Response(JSON.stringify({ error: errorMessage }), {
       status: 200,
       headers: { "Content-Type": "application/json" },
     });
  }





}