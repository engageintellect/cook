export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request: Request) {
  const username = "engageintellect";
  const url = `https://api.github.com/users/${username}/repos`;
  const headers = { "Accept": "application/vnd.github.v3+json" };

  try {
    let totalStars = 0;
    let nextUrl = url;

    while (nextUrl) {
      const response = await fetch(nextUrl, { headers });
      if (!response.ok) {
        return new Response(JSON.stringify({ error: 'Failed to fetch repositories' }), { status: response.status });
      }
      
      const repos = await response.json();
      totalStars += repos.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);

      // Check for pagination
      const linkHeader = response.headers.get('link');
      if (linkHeader) {
        const nextLink = linkHeader.split(',').find(s => s.includes('rel="next"'));
        nextUrl = nextLink ? nextLink.split(';')[0].replace('<', '').replace('>', '').trim() : "";
      } else {
        nextUrl = "";
      }
    }

    return new Response(JSON.stringify({ totalStars }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch repositories' }), { status: 500 });
  }
}