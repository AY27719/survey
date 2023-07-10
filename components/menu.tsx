import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex">
      <div>
        <Image
          src="/images/download.jpg"
          width={50}
          height={50}
          alt="image"
        ></Image>
      </div>
      <div>
        <ul className="flex ml-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="ml-3">
            <Link href="/Survey">survey</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
