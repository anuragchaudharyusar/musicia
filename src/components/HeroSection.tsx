import Link from "next/link"
import { SparklesCore } from "./ui/sparkles";
import { AuroraBackground } from "./ui/aurora-background";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="p-4 relative z-10 w-full text-center">
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
      Master the art of music
      </h1>
      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
      Dive into our comprehensive music courses and transform your musical journey today. Whether you&apos;re a beginner or looking to refine your skills, join us to unlock your true potential.
      </p>
      <br/>
      <div>
        <Link href={"/courses"}>
        <Button 
        borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
          Explore courses
        </Button>
        </Link>
      </div>
      </div>
      
    </div>
  )
}

export default HeroSection

