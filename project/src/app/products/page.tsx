import { BlogCard } from "@/app/components/ui/blogCard";

export default function Page() {
  return (
    <div className="products-wrapper">
      <div className="products-contents">
        <h1 id="products-title">Products</h1>
        <div className="product-lists">
          <div className="product-item">
            <BlogCard
              url="https://tomomon-blog.pages.dev/"
              ogp="https://tomomon-blog.pages.dev/static/assets/img/ogp/ogp.png"
              favicon="https://tomomon-blog.pages.dev/static/assets/favicon.ico"
              title="Tomoki Ota's Blog"
              description="フロントエンドからバックエンドまで日々の開発で得た知見や最新の技術トレンドを発信します。"
              width={250}
              height={250}
            />
          </div>
          <div className="product-item">
            <BlogCard
              url="https://tomomon.jp/"
              ogp="https://tomomon.jp/wp-content/themes/cocoon-master/screenshot.jpg"
              favicon="https://tomomon.jp/wp-content/uploads/2020/12/cropped-1_Primary_logo_on_transparent_273x67-32x32.png"
              title="とももん Official Website"
              description="NEWS カテゴリ別の最新記事 YouTube とももんちゃんねる このカテゴリをもっと読む 旅行 このカテゴリをもっと読む プログラミング このカテゴリをもっと読む その他 このカテゴリをもっと読む"
              width={100}
              height={100}
            />
          </div>
          <div className="product-item">
            <BlogCard
              url="https://crates.io/crates/helpman/"
              ogp="/img/helpman.png"
              favicon="https://crates.io/favicon.ico"
              title="helpman(deprecated)"
              description="MarkdwonでメモをかけるCLIアプリケーション"
              width={100}
              height={100}
            />
          </div>
          <div className="product-item">
            <BlogCard
              url="https://github.com/tomo1227/pathy/"
              ogp="/img/pathy.png"
              favicon="https://github.githubassets.com/favicons/favicon-dark.png"
              title="Pathy(EOL)"
              description="ブラウザ上で動くシンプルマークダウンブログサイト"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
