import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <>
  <header className="max-w-7xl mx-auto my-20 flex flex-col items-center gap-4">
    <h1 className="text-4xl font-bold">welcome to Next project👋🏻 </h1>
    <Link href={"/products"}>
    <button className="bg-gray-200 text-2xl font-bold px-3 rounded-2xl shadow cursor-pointer">
      view all products 
    </button>
    </Link>
  </header>
  </>
}
