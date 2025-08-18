// eslint-disable-next-line @typescript-eslint/no-require-imports
const nodemailer = require("nodemailer");

// Email configuration
const EMAIL_CONFIG = {
  // Option 1: Gmail (current setup)
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "your-email@gmail.com",
    pass: process.env.EMAIL_PASS || "your-app-password", // Use app password for Gmail
  },

  // Option 2: Custom Domain SMTP (uncomment and configure if needed)
  // host: process.env.SMTP_HOST || "mail.elitexteriorsva.com",
  // port: process.env.SMTP_PORT || 587,
  // secure: false, // true for 465, false for other ports
  // auth: {
  //   user: process.env.EMAIL_USER || "info@elitexteriorsva.com",
  //   pass: process.env.EMAIL_PASS || "your-email-password",
  // },
};

const NOTIFICATION_EMAILS = [
  "sam.d@cheeriostudios.com",
  "info@elitexteriorsva.com",
];

exports.handler = async (event, _context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body);
    const {
      type,
      postSlug,
      postTitle,
      userName,
      userEmail,
      content,
      timestamp,
    } = data;

    // Create transporter
    const transporter = nodemailer.createTransporter(EMAIL_CONFIG);

    // Generate email content based on notification type
    let subject, html;

    switch (type) {
      case "like":
        subject = `New Blog Like: ${postTitle}`;
        html = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0ea5e9;">New Blog Like Received! ❤️</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0;">Article:</h3>
              <p style="margin: 0; font-weight: bold;">${postTitle}</p>
              <p style="margin: 10px 0 0 0; color: #64748b;">
                <a href="https://elitexteriorsva.com/blog/${postSlug}" style="color: #0ea5e9;">View Article</a>
              </p>
            </div>
            <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #059669;">
                <strong>Time:</strong> ${new Date(timestamp).toLocaleString()}
              </p>
            </div>
            <p style="color: #64748b; font-size: 14px;">
              This notification was sent automatically from your Elite Exteriors blog.
            </p>
          </div>
        `;
        break;

      case "comment":
        subject = `New Blog Comment: ${postTitle}`;
        html = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0ea5e9;">New Blog Comment Pending Approval! 💬</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0;">Article:</h3>
              <p style="margin: 0; font-weight: bold;">${postTitle}</p>
              <p style="margin: 10px 0 0 0; color: #64748b;">
                <a href="https://elitexteriorsva.com/blog/${postSlug}" style="color: #0ea5e9;">View Article</a>
              </p>
            </div>
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0;">Comment Details:</h3>
              <p style="margin: 0 0 5px 0;"><strong>Name:</strong> ${userName}</p>
              <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${userEmail}</p>
              <div style="background: white; padding: 15px; border-radius: 6px; margin: 10px 0;">
                <p style="margin: 0; white-space: pre-wrap;">${content}</p>
              </div>
            </div>
            <div style="background: #fef2f2; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #dc2626;">
                <strong>Action Required:</strong> This comment is pending moderation.
              </p>
              <p style="margin: 10px 0 0 0;">
                <a href="https://elitexteriorsva.com/admin" style="background: #0ea5e9; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; display: inline-block;">
                  Review Comment
                </a>
              </p>
            </div>
            <p style="color: #64748b; font-size: 14px;">
              Time: ${new Date(timestamp).toLocaleString()}
            </p>
          </div>
        `;
        break;

      case "share":
        subject = `Blog Article Shared: ${postTitle}`;
        html = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0ea5e9;">Article Shared! 🚀</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0;">Article:</h3>
              <p style="margin: 0; font-weight: bold;">${postTitle}</p>
              <p style="margin: 10px 0 0 0; color: #64748b;">
                <a href="https://elitexteriorsva.com/blog/${postSlug}" style="color: #0ea5e9;">View Article</a>
              </p>
            </div>
            <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #059669;">
                <strong>Time:</strong> ${new Date(timestamp).toLocaleString()}
              </p>
            </div>
            <p style="color: #64748b; font-size: 14px;">
              Your content is being shared and reaching more potential customers!
            </p>
          </div>
        `;
        break;

      default:
        throw new Error("Invalid notification type");
    }

    // Send emails to all notification recipients
    const emailPromises = NOTIFICATION_EMAILS.map((email) =>
      transporter.sendMail({
        from: EMAIL_CONFIG.auth.user,
        to: email,
        subject: subject,
        html: html,
      })
    );

    await Promise.all(emailPromises);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Notifications sent successfully",
        recipients: NOTIFICATION_EMAILS.length,
      }),
    };
  } catch (error) {
    console.error("Error sending notification:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to send notification",
        details: error.message,
      }),
    };
  }
};
