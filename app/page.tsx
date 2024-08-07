import Image from "next/image";
import { FloatingNav } from "./components/ui/floating-navbar";
import { navItems } from "@/data"
import Hero from "./components/hero"
import AboutUs from "./components/aboutUs"
import { Service } from "./components/Service"
import {Info} from "./components/Info"

export default function Home() {
  return (
    <div className=" relative flex flex-col flex-1 items-center justify-center ">
      <FloatingNav navItems={navItems}  />
      <Hero />
      <div className="w-[90%] flex item-center flex-col ">
        <AboutUs />
      </div>
      <Service />
    </div>
  );
}
