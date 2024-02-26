import Image from "next/image";

import List from "@/components/List";
import Data from "@/components/data";
import { useState } from "react";

export default function Home() {
  const [people,setPeople] = useState(Data)
  return (
    <main>
<div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden mt-10">
  <div className="px-4 py-2 flex flex-col items-center">
    <h3 className="font-semibold text-lg">{people.length} birthdays today</h3>
    <List people = {people}/>
    <button className="bg-pink-400 p-2 pl-7 pr-7 mt-4 text-white rounded-md"onClick={()=>setPeople([])}>ClearAll</button>
    
  </div>
</div>


    </main>
  );
}
