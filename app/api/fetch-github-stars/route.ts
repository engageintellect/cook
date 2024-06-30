export const dynamic = 'force-dynamic'; // defaults to auto

interface Repo {
  stargazers_count: number;
  name: string;
}

export async function GET(request: Request): Promise<Response> {
  const username = "engageintellect";
  const token = process.env.GITHUB_TOKEN; // Ensure you set this in your environment variables
  const baseUrl = `https://api.github.com/users/${username}/repos`;
  const headers = {
    "Accept": "application/vnd.github.v3+json",
    "Authorization": `token ${token}`
  };

  try {
    if (!token) {
      console.error('GitHub token is missing');
      return new Response(JSON.stringify({ error: 'GitHub token is missing' }), { status: 500 });
    }

    let totalStars = 0;
    let nextUrl: string | null = baseUrl;
    let page = 1; // Start from the first page

    while (nextUrl) {
      const response: Response = await fetch(`${nextUrl}?page=${page}&timestamp=${Date.now()}`, { headers }); // Cache busting
      if (!response.ok) {
        console.error(`Failed to fetch URL: ${nextUrl}, Status: ${response.status}`);
        return new Response(JSON.stringify({ error: `Failed to fetch repositories, Status: ${response.status}` }), { status: response.status });
      }

      const rateLimitRemaining = response.headers.get('x-ratelimit-remaining');
      const rateLimitReset = response.headers.get('x-ratelimit-reset');
      if (rateLimitRemaining !== null && parseInt(rateLimitRemaining) === 0) {
        const resetTime = new Date(parseInt(rateLimitReset!) * 1000);
        console.error(`Rate limit exceeded. Try again after ${resetTime}`);
        return new Response(JSON.stringify({ error: 'Rate limit exceeded' }), { status: 429 });
      }

      const repos: Repo[] = await response.json();
      repos.forEach(repo => {
        totalStars += repo.stargazers_count;
      });

      // Check for pagination
      const linkHeader: string | null = response.headers.get('link');
      if (linkHeader) {
        const nextLink = linkHeader.split(',').find(s => s.includes('rel="next"'));
        if (nextLink) {
          const match = nextLink.match(/<([^>]+)>/);
          nextUrl = match ? match[1] : null;
          page += 1; // Increment the page number
        } else {
          nextUrl = null;
        }
      } else {
        nextUrl = null;
      }
    }

    return new Response(JSON.stringify({ totalStars }), { status: 200 });
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch repositories' }), { status: 500 });
  }
}
