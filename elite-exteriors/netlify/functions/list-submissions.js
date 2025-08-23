// List submissions for a Netlify Form by name
// Env vars required: NETLIFY_ACCESS_TOKEN, NETLIFY_SITE_ID

exports.handler = async (event) => {
  try {
    const token = process.env.NETLIFY_ACCESS_TOKEN;
    const siteId = process.env.NETLIFY_SITE_ID;
    if (!token || !siteId) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error:
            "Missing NETLIFY_ACCESS_TOKEN or NETLIFY_SITE_ID environment variables.",
        }),
      };
    }

    const {
      form = "",
      per_page = "100",
      page = "1",
    } = event.queryStringParameters || {};
    if (!form) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing 'form' query parameter" }),
      };
    }

    const apiBase = "https://api.netlify.com/api/v1";
    const headers = { Authorization: `Bearer ${token}` };

    // Fetch forms for the site
    const formsRes = await fetch(`${apiBase}/sites/${siteId}/forms`, {
      headers,
    });
    if (!formsRes.ok) {
      const text = await formsRes.text();
      return {
        statusCode: formsRes.status,
        body: JSON.stringify({ error: text }),
      };
    }
    const forms = await formsRes.json();
    const target = forms.find(
      (f) => (f.name || "").toLowerCase() === form.toLowerCase()
    );
    if (!target) {
      return {
        statusCode: 200,
        body: JSON.stringify({ submissions: [], formId: null }),
      };
    }

    // Fetch submissions
    const subsRes = await fetch(
      `${apiBase}/forms/${target.id}/submissions?per_page=${encodeURIComponent(
        per_page
      )}&page=${encodeURIComponent(page)}`,
      { headers }
    );
    if (!subsRes.ok) {
      const text = await subsRes.text();
      return {
        statusCode: subsRes.status,
        body: JSON.stringify({ error: text }),
      };
    }
    const submissions = await subsRes.json();

    // Normalize
    const normalized = submissions.map((s) => ({
      id: s.id,
      number: s.number,
      created_at: s.created_at,
      data: s.data || {},
      form_id: s.form_id,
      labels: Array.isArray(s.labels) ? s.labels : [],
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({ submissions: normalized, formId: target.id }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};
