
export const fetchPost = async () => {
    const res = await fetch('https://stagl-api.medicaldepartures.com/keendex/v1/search?page=1&size=8&query=&sort=recommended&device=desktop', {
      headers: {
        'X-Site-Id': '1',
        'X-Locale': 'en-US',
      },
      cache: 'no-store'
    });
    return res.json();
};