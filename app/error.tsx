'use client'

 
interface ErrorProps {
  error: {
    message: string;
    stack: string
  };
}

export default function error({error}: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-rose-600">Error</h1>
      <p className="text-rose-600">some trouble with server</p>
      <p className="text-rose-600">{error.message}</p>
    </div>
  );
 }
