import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        src="/img/aaa.jpg"
        fill
        style={{ objectFit: "cover" }}
        alt="top-background-image"
      />
    </div>
  );
}
