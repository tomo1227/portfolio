"use client";
import { useState } from "react";

export default function Page() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(false);
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const jsonData = Object.fromEntries(formData.entries());
    const baseUrl = process.env.BASE_URL || "https://tomokiota.vercel.app/";

    try {
      const response = await fetch(baseUrl + "api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "エラーが発生しました");
      }
    } catch (error) {
      console.error("通信エラー:", error);
      setErrorMessage("ネットワークエラーが発生しました");
    }
  }
  return (
    <div className="contact-wrapper">
      <h1 id="contact-title">Contact</h1>
      <div className="contact-contents">
        <h1 className="text-xl text-black font-bold mb-4">
          お問い合わせフォーム
        </h1>
        {/* <form className="w-4/5" action={handleSubmit}> */}
        <form className="w-4/5" onSubmit={handleSubmit}>
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
              name="message"
              rows={8}
              required
              className="mt-1 w-full rounded-md"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-2 rounded-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              送信
            </button>
          </div>
          {/* 送信完了メッセージ */}
          {isSubmitted && (
            <div className="mb-4 p-4 text-green-800 bg-green-100 rounded">
              メールが送信されました！
            </div>
          )}

          {/* エラーメッセージ */}
          {errorMessage && (
            <div className="mb-4 p-4 text-red-800 bg-red-100 rounded">
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
