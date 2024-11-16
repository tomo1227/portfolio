// import Image from "next/image";

export default function Page() {
  async function sendEmail(formData: FormData) {
    "use server";
    console.log(formData);
    //   const headers = new Headers([
    //     ["Content-Type", "application/json"],
    //     ["Authorization", "Bearer " + process.env.SENDGRID_API_KEY],
    //   ]);
    //   const requestBody = {
    //     personalizations: [
    //       {
    //         to: [
    //           {
    //             email: formData.get("email"),
    //           },
    //         ],
    //       },
    //     ],
    //     subject: "お問い合わせを受け付けました。",
    //     from: {
    //       email: "service@example.com",
    //     },
    //     content: [
    //       {
    //         type: "text/plain",
    //         value:
    //           "以下の内容でお問い合わせを受け付けました。\r\n------\r\n" +
    //           formData.get("content"),
    //       },
    //     ],
    //   };
    //   const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    //     method: "POST",
    //     headers: headers,
    //     body: JSON.stringify(requestBody),
    //   });
  }
  return (
    <div className="contact-wrapper">
      <h1 id="contact-title">Contact</h1>
      <div className="contact-contents">
        <h1 className="text-xl text-black font-bold mb-4">
          お問い合わせフォーム
        </h1>
        <form className="w-4/5" action={sendEmail}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black"
            >
              お名前
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              required
              className="mt-1 w-full rounded-md h-4/5"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              メールアドレス
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              className="mt-1 w-full rounded-md h-4/5"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-black"
            >
              お問い合わせ内容
            </label>
            <textarea
              id="contact-message"
              name="content"
              rows={8}
              required
              className="mt-1 w-full rounded-md"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-2 rounded text-white bg-blue-600 hover:bg-blue-700"
            >
              送信
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
