import Link from "next/link";

export default function Page() {
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-contents">
        <Link href="/profile">Profile</Link>
      </div>
      <div className="portfolio-contents">
        <Link href="/skills">Skills</Link>
      </div>
      <div className="portfolio-contents">
        <Link href="/products">Products</Link>
      </div>
      <div className="portfolio-contents">
        <Link href="/career">Career</Link>
      </div>
      <div className="portfolio-contents">
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
