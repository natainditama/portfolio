import Link from "next/link";

import Particles from "@/components/particles";
import { Button } from "@/components/ui/button";

import packageJson from "../../package.json";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section className="h-screen bg-black text-center w-full">
        <Particles
          className="absolute inset-0 h-screen w-screen overflow-hidden"
          quantity={100}
        />
        <div className="container mx-auto flex h-full flex-col justify-center text-white z-10 relative">
          <h1 className="text-3xl md:text-5xl lg:text-6xl max-w-2xl mx-auto font-bold">
            Sorry, we&apos;re doing some work on the site
          </h1>
          <p className="mt-4">
            Thank you for being patient. We are doing some work on the site and
            will be back shortly
          </p>
          <div className="max-w-max mx-auto mt-6">
            <Button size={"lg"} asChild>
              <Link href={packageJson?.repository?.url} target="_blank">
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
