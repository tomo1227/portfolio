import nodemailer from "nodemailer";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const request = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASS,
    },
  });
  const toHostMailData = {
    from: request.email,
    to: "tomoki.ota1227@gmail.com",
    subject: `【Tomoki Ota's Portfolio Website】${request.name}様より`,
    text: `${request.message} Send from ${request.email}`,
    html: `
        <p>【名前】</p>
        <p>${request.name}</p>
        <p>【メッセージ内容】</p>
        <p>${request.message}</p>
        <p>【メールアドレス】</p>
        <p>${request.email}</p>
        `,
  };
  try {
    await transporter.sendMail(toHostMailData);
  } catch (error) {
    console.error(error);
    return new Response("Failed to send mail ", {
      status: 400,
    });
  }
  return new Response("Success!", {
    status: 200,
  });
}
