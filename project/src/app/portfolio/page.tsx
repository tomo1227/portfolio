import Link from "next/link";

export default function Page() {
  return (
    <div className="portfolio_wrapper">
      <div className="portfolio_contents">
        <Link href="/profile">Profile</Link>
      </div>
      <div className="portfolio_contents">
        <Link href="/skill">Skill</Link>
      </div>
      <div className="portfolio_contents">
        <Link href="/products">Products</Link>
      </div>
      <div className="portfolio_contents">
        <Link href="/career">Career</Link>
      </div>
      <div className="portfolio_contents">
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
