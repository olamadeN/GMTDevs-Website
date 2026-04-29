import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();

    // 1. Notify YOU
    await resend.emails.send({
      from: "Onboarding <onboarding@gmtdevs.com>",
      to: process.env.YOUR_EMAIL,
      subject: "New Project Onboarding Submission",
      html: `
        <h2>New Client Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Project:</strong> ${data.businessName}</p>
        <p><strong>Project:</strong> ${data.projectDescription}</p>
        <p><strong>Project:</strong> ${data.website}</p>
        <p><strong>Project:</strong> ${data.projectDescription}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Budget:</strong> ${data.timeline}</p>
        <p><strong>Budget:</strong> ${data.features}</p>
        <p><strong>Budget:</strong> ${data.understandsProcess}</p>
      `,
    });

    // 2. Auto-reply TO CLIENT
    await resend.emails.send({
      from: "GMTDevs <onboarding@yourdomain.com>",
      to: data.email,
      subject: "We received your project request",
      html: `
        <h2>Thank you ${data.name}</h2>

        <p>We’ve received your project request and will review it shortly.</p>

        <p>Our team will reach out to you within 24–48 hours to schedule a short discovery call.</p>

        <br/>

        <p><strong>GMTDevs Team</strong></p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}