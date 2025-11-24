import Image from "next/image";
import Features from "./Components/Features";
import Guide from "./Components/Guide";
import GetApp from "./Components/GetApp";
import Hero from "./Components/Hero";
import Camp from "./Components/Camp";
export default function Home() {
  return (
   <div>
  <Hero/>
  <Camp/>
    <Guide/>
   <Features/>
   <GetApp/>
   
   </div>

      )
      }