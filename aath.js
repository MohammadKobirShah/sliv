addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const url = new URL(request.url);
    const targetUrl = "https://la.drmlive.au/tp/sliv-aath.m3u8";

    const modifiedRequest = new Request(targetUrl, {
        method: "GET",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
            "X-Forwarded-For": "103.10.124.10", // Indian IP Example
            "Referer": "https://la.drmlive.au/",  // Some services require a referer
        }
    });

    const response = await fetch(modifiedRequest);
    return new Response(response.body, response);
}
