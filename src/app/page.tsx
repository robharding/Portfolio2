import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, MoveDown } from "lucide-react";
import Link from "next/link";

import profilePic from "../../public/profile.jpg";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="antialiased">
      <section className="relative flex h-screen w-screen bg-gradient-to-r from-sky-100 to-slate-100">
        <Link
          href=""
          className="flex h-6 absolute right-4 top-2 gap-2 hover:text-slate-400"
        >
          <p className="text-sm m-auto">Join my newsletter</p>{" "}
          <Mail className="h-4 w-4 m-auto" />
        </Link>
        <div className="m-auto">
          <div className="flex items-center gap-4 sm:gap-8">
            <Avatar className="relative aspect-square h-[8rem] w-[8rem] sm:h-[10rem] sm:w-[10rem] shadow-xl border-2 border-white">
              <Image
                src={profilePic}
                alt="Profile"
                blurDataURL={profilePic.blurDataURL}
                placeholder="blur"
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
            <Link href="">
              Click a{" "}
              <span className="text-sky-500 hover:text-sky-600">link</span> or
              have a scroll
              <MoveDown className="m-auto mt-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
