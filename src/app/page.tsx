import Link from "next/link";

import { Button } from "@/components";

import packageJson from "../../package.json";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section className="h-screen bg-black text-center w-full">
        <div className="container mx-auto flex h-full flex-col justify-center text-white">
          <h1 className="text-6xl max-w-2xl mx-auto">
            Sorry, we&apos;re doing some work on the site
          </h1>
          <p className="mt-4">
            Thank you for being patient. We are doing some work on the site and
            will be back shortly
          </p>
          <div className="max-w-max mx-auto mt-4">
            <Button size={"lg"} asChild>
              <Link href={packageJson.homepage} target="_blank">
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
