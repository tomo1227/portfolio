import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        src="/img/bbb.jpg"
        fill
        style={{ objectFit: "cover" }}
        alt="top-background-image"
      />
    </div>
  );
}
