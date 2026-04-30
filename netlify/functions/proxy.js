exports.handler = async (event) => {
  const key = process.env.FOOTBALL_API_KEY;
  const url = event.queryStringParameters.url;
  if (!url) return { statusCode: 400, body: 'Missing url' };
  try {
    const res = await fetch(url, {
      headers: { 'X-Auth-Token': key }
    });
    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { 'Access-Control-Allow-Origin': '*' }
    };
  } catch(e) {
    return { statusCode: 500, body: e.message };
  }
};
