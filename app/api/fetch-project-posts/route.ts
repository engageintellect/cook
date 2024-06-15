export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request: Request) {
  const username = "engageintellect";
  const url = `https://bento.engage-dev.com/api/v1/fetchProjectsFeed.json`;
  const headers = { "Accept": "application/vnd.github.v3+json" };

  try {
    let postsData = [];
    let nextUrl = url;

    while (nextUrl) {
      const response = await fetch(nextUrl, { headers });
      if (!response.ok) {
        return new Response(JSON.stringify({ error: 'Failed to fetch repositories' }), { status: response.status });
      }
      
      const posts = await response.json();
      postsData = posts;

      // Check for pagination
      const linkHeader = response.headers.get('link');
      if (linkHeader) {
        const nextLink = linkHeader.split(',').find(s => s.includes('rel="next"'));
        nextUrl = nextLink ? nextLink.split(';')[0].replace('<', '').replace('>', '').trim() : "";
      } else {
        nextUrl = "";
      }
    }

    return new Response(JSON.stringify({ postsData }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch repositories' }), { status: 500 });
  }
}

