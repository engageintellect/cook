export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request: Request) {
  const url = `https://bento.engage-dev.com/api/v1/fetchProjectsFeed.json`;
  const headers = { "Accept": "application/json" };

  try {
    let postsData:any = [];
    let nextUrl = url;
    let pageCount = 0;

    while (nextUrl) {
      const response = await fetch(nextUrl, { headers });
      if (!response.ok) {
        return new Response(JSON.stringify({ error: 'Failed to fetch projects feed' }), { status: response.status });
      }
      
      const posts = await response.json();
      postsData = postsData.concat(posts);

      // Logging for debugging
      console.log(`Fetched ${posts.length} posts on page ${pageCount + 1}`);

      // Check for pagination
      const linkHeader = response.headers.get('link');
      if (linkHeader) {
        const nextLink = linkHeader.split(',').find(s => s.includes('rel="next"'));
        nextUrl = nextLink ? nextLink.split(';')[0].replace('<', '').replace('>', '').trim() : "";
      } else {
        nextUrl = "";
      }

      pageCount++;
    }

    console.log(`Total posts: ${postsData.length}`);
    return new Response(JSON.stringify({ postsData }), { status: 200 });
  } catch (error) {
    console.error('Error fetching projects feed:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch projects feed' }), { status: 500 });
  }
}
