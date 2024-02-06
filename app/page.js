import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-2xl">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="grid justify-center gap-2 my-2">
        <Link href="./week-2" className="underline">Week 2</Link>
        <Link href="./week-3" className="underline">Week 3</Link>
        <Link href="./week-4" className="underline">Week 4</Link>
      </div>
    </div>
  );
}
