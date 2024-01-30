import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2" className="underline">Week 2</Link>
      <Link href="./week-3" className="underline">Week 3</Link>
    </div>
  );
}
