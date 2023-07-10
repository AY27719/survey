import Image from "next/image";
export default function Home() {
  return (
    <main>
      <div className="flex ml-80">hello this is a survey made be me ^^</div>
      <div>
        <Image
          src="/images/Marvel_Logo.svg.png"
          width={1000}
          height={500}
          alt="image"
        ></Image>
      </div>
    </main>
  );
}
