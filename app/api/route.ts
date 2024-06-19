export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
  return new Response(
    JSON.stringify({
      msg: 'hello world',
      app: 'cook',
      version: '0.5.0',
    }),
    {
      status: 200,
    }
  )
}