import Image from "next/image";
import { Inter } from "next/font/google";
import List from "@/components/List";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
<div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden mt-10">
  <div className="px-4 py-2 flex flex-col items-center">
    <h3 className="font-semibold text-lg">0 birthdays today</h3>
    <p className="text-gray-700">List component</p>
    <button className="bg-pink-400 p-2 pl-7 pr-7 mt-4 text-white rounded-md"onClick={()=>{}}>ClearAll</button>
  </div>
</div>


    </main>
  );
}
