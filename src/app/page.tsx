import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, MoveDown } from "lucide-react";
import Link from "next/link";

import profilePic from "../../public/profile.jpg";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="antialiased text-lg scroll-smooth">
      <section className="relative flex h-screen bg-gradient-to-r from-sky-100 to-slate-100">
        <Link
          href=""
          className="flex h-6 absolute right-4 top-2 gap-2 hover:text-slate-400"
        >
          <p className="text-sm m-auto">Join my newsletter</p>{" "}
          <Mail className="h-4 w-4 m-auto" />
        </Link>
        <div className="m-auto">
          <div className="flex gap-4 sm:gap-8 justify-center">
            <Avatar className="relative aspect-square h-[8rem] w-[8rem] sm:h-[10rem] sm:w-[10rem] shadow-xl border-2 border-slate-50">
              <Image
                src={profilePic}
                alt="Profile"
                blurDataURL={profilePic.blurDataURL}
                placeholder="blur"
                quality={100}
                priority={true}
              />
            </Avatar>
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold w-1">
                Rob Harding
              </h1>
              <h2 className="text-2xl sm:text-3xl">Web Developer</h2>
            </div>
          </div>
          <p className="text-center mt-8 max-w-md">
            You can find me on{" "}
            <Link href="" className="text-sky-500 hover:text-sky-600">
              LinkedIn
            </Link>
            ,{" "}
            <Link href="" className="text-sky-500 hover:text-sky-600">
              Github
            </Link>
            , or{" "}
            <Link href="" className="text-sky-500 hover:text-sky-600">
              Threads
            </Link>
            ,<br /> or have a look at my{" "}
            <Link href="" className="text-sky-500 hover:text-sky-600">
              resume
            </Link>
            .
          </p>
          <div className="text-center mt-8 hover:cursor-pointer  hover:!text-slate-400">
            <Link href="#projects">
              Click a{" "}
              <span className="text-sky-500 hover:text-sky-600">link</span> or
              have a scroll
              <MoveDown className="m-auto mt-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="text-center p-16 bg-slate-50" id="projects">
        <p>Want to see more? Check out my</p>
        <h1 className="text-5xl sm:text-6xl font-bold text-sky-500">
          PROJECTS
        </h1>
      </section>
      <section className="relative flex bg-gradient-to-r from-sky-100 to-slate-100 p-10">
        <h3 className="sm:text-4xl text-3xl font-semibold text-center w-full">
          Featured
        </h3>
      </section>
      <section className="text-center p-16 bg-slate-50" id="projects">
        <p>What I&apos;m up to right</p>
        <h1 className="text-5xl sm:text-6xl font-bold text-sky-500">NOW</h1>
      </section>
      <section className="relative flex bg-gradient-to-r from-sky-100 to-slate-100 p-10">
        <div className="mx-auto max-w-xl">
          <p className="text-center">
            I&apos;ve moved back to{" "}
            <span className="text-sky-500">Toronto</span> after two
            unforgettable ski seasons in BC. Currently working on a few personal
            projects to build out my portfolio. In my free time I like to hit
            the gym as well as playing tennis with my dad. Looking forward to a
            10 day canoe trip in <span className="text-sky-500">Killarney</span>{" "}
            this August.
          </p>
          <p className="text-slate-400 text-center mt-2 italic">
            Updated Thursday July 6th, 2023
          </p>
        </div>
      </section>
      <section className="text-center p-16 bg-slate-50" id="projects">
        <p>Get in touch.</p>
        <h1 className="text-5xl sm:text-6xl font-bold text-sky-500">CONTACT</h1>
      </section>
    </main>
  );
}
