import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="profile-wrapper">
        <div className="profile-contents">
          <h1 id="profile-title">Profile</h1>
        </div>
        <Image
          className="rounded-full w-full aspect-square object-cover object-[center_30%]"
          src="/img/avatar.webp"
          alt="profile-img"
          width="100"
          height="100"
        />
      </div>
    </div>
  );
}
