// Mark a Netlify submission as approved by adding a label
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
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    // Fetch current submission
    const getRes = await fetch(
      `${apiBase}/submissions/${encodeURIComponent(id)}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (!getRes.ok) {
      const text = await getRes.text();
      return {
        statusCode: getRes.status,
        body: JSON.stringify({ error: text }),
      };
    }
    const sub = await getRes.json();
    const labels = Array.isArray(sub.labels) ? sub.labels : [];
    if (!labels.includes("approved")) labels.push("approved");

    // Update labels (Netlify API supports PATCH for submissions)
    const patchRes = await fetch(
      `${apiBase}/submissions/${encodeURIComponent(id)}`,
      {
        method: "PATCH",
        headers,
        body: JSON.stringify({ labels }),
      }
    );
    if (!patchRes.ok) {
      const text = await patchRes.text();
      return {
        statusCode: patchRes.status,
        body: JSON.stringify({ error: text }),
      };
    }
    return { statusCode: 200, body: JSON.stringify({ ok: true, labels }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};
