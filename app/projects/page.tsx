import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import { Card } from "../components/card"; // Ensure this is correctly imported

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <Particles className="absolute inset-0 -z-10" quantity={300} />
      <div className="container flex items-center justify-center px-4 mx-auto min-h-screen">
        <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden">
          <Card>
            {/* Assuming Card component can render children passed to it */}
            <h2 className="text-3xl text-center font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Projects
            </h2>
            <p className="mt-4 text-zinc-400 text-center">
              Some of the projects are from work and some are on my own time.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
