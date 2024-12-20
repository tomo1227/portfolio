import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="site-header">
        <div className="header-inner_-wrapper"></div>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="top-page">
          <Link href="/portfolio">
            <h1>
              <span id="top-page-title">
                Welcome to Tomoki Ota&apos;s Portfolio.
              </span>
            </h1>
          </Link>
          <div className="top-page-bg-img">
            <Image
              src="/img/top_page_bg.jpg"
              fill
              style={{ objectFit: "cover" }}
              alt="top-background-image"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
