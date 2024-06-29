export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request: Request) {
  const username = "engageintellect";
  //TODO: this could be way cleaner.
  //Ideally, we would do an initial request to get the total repo count
  const url = `https://api.github.com/users/${username}/repos?per_page=10000`;
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

      // Logging for debugging
      console.log(`Fetched ${repos.length} repositories`);

      // Check for pagination
      const linkHeader = response.headers.get('link');
      if (linkHeader) {
        const nextLink = linkHeader.split(',').find(s => s.includes('rel="next"'));
        nextUrl = nextLink ? nextLink.split(';')[0].replace('<', '').replace('>', '').trim() : "";
      } else {
        nextUrl = "";
      }
    }

    console.log(`Total stars: ${totalStars}`);
    return new Response(JSON.stringify({ totalStars }), { status: 200 });
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch repositories' }), { status: 500 });
  }
}
