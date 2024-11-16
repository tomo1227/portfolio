import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="profile-wrapper">
        <h1 id="profile-title">Profile</h1>
        <div className="profile-contents">
          <div className="profile-icon">
            <Image
              id="profile-img"
              src="/img/avatar.webp"
              alt="profile-img"
              width="100"
              height="100"
            />
          </div>
          <div className="profile-message">
            <h2>Tomoki Ota</h2>
            <p>
              大阪出身。O型。ESTP。Goが得意なフルスタックエンジニア。趣味はカメラと旅行、グルメ。特に海外が好きで、40ヶ国以上渡航歴あり。最近はワインにハマってる。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
