import Image from "next/image";
import Features from "./Components/Features";
import Guide from "./Components/Guide";
import GetApp from "./Components/GetApp";
import Hero from "./Components/hero";
import Camp from "./Components/camp";
export default function Home() {
  return (
   <div>
  <Hero/>
  <Camp/>
   <Features/>
   <Guide/>
   <GetApp/>
   

   </div>

      )
      }