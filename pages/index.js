import Image from "next/image";
import { Inter } from "next/font/google";
import List from "@/components/List";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="main">

<div className="  max-w-md mx-auto  shadow-md rounded-md overflow-hidden mt-9 card z-10">
  <div className="px-4 py-2">
  <h3 className="font-semibold">0 birthday today</h3>
  <List />
  <button></button>
  </div>
</div>


    </main>
  );
}
