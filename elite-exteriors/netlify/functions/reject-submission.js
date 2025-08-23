// Delete a Netlify submission by id (used for rejecting comments)
// Env vars: NETLIFY_ACCESS_TOKEN

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }
    const token = process.env.NETLIFY_ACCESS_TOKEN;
    if (!token) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing NETLIFY_ACCESS_TOKEN" }),
      };
    }
    const { id } = JSON.parse(event.body || "{}");
    if (!id) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing id" }) };
    }
    const apiBase = "https://api.netlify.com/api/v1";
    const headers = { Authorization: `Bearer ${token}` };

    const delRes = await fetch(
      `${apiBase}/submissions/${encodeURIComponent(id)}`,
      {
        method: "DELETE",
        headers,
      }
    );
    if (!delRes.ok) {
      const text = await delRes.text();
      return {
        statusCode: delRes.status,
        body: JSON.stringify({ error: text }),
      };
    }
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};
