import { sendEmail } from "@/util/mail.utils";

export async function POST() {
  const sender = {
    name: "Tanween",
    address: "no-reply@example.com",
  };

  const receipents = [
    {
      name: "maher",
      address: "zeromj12@gmail.com",
    },
  ];

  try {
    const result = await sendEmail({
      sender,
      receipents,
      subject: "welcome to Tanween",
      message: "you are welcome",
    });

    return Response.json({ accepted: result.accepted });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
