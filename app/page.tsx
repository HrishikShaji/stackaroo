import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { HiringProcess } from "./components/HiringProcess";
import { Talents } from "./components/Talents";
import { Benefits } from "./components/Benefits";
import { Benchmark } from "./components/Benchmark";
import { Pricing } from "./components/Pricing";
import { TalentCategories } from "./components/TalentCategories";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <HiringProcess />
      <Talents />
      <Benefits />
      <Benchmark />
      <Pricing />
      <TalentCategories />
    </main>
  );
}
