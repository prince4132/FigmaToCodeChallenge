import Image from "next/image";
import Hero from "@/app/components/hero"
import Collections from "./components/Collections";
import Feature from "./components/feature";
import CTA from "./components/CTA";


export default function Home() {
  return (
    <div className="text-neutral-900 px-[5%] flex flex-col">
      <Hero/>
      <Collections/>
      <Feature/>
      <CTA/>
    </div>
  );
}
