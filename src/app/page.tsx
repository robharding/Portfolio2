import { Avatar } from "@/components/ui/avatar";
import { Mail, Mails, MoveDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import profilePic from "../../public/profile.jpg";
import asm2 from "../../public/asm2.png";
import ContactForm from "@/components/ContactForm";

export default async function Home() {
  return (
    <main className="antialiased text-lg scroll-smooth text-primary">
      <section className="relative flex h-screen bg-gradient-to-r from-sky-100 to-white">
        <Link
          href=""
          className="flex h-6 absolute right-4 top-2 gap-2 hover:text-slate-400"
        >
          <p className="text-sm m-auto">Join my newsletter</p>{" "}
          <Mail className="h-4 w-4 m-auto" />
        </Link>
        <div className="m-auto">
          <div className="flex gap-4 sm:gap-8 justify-center">
            <Avatar className="relative aspect-square h-[10rem] w-[10rem] sm:h-[12rem] sm:w-[12rem] shadow-xl border-2 border-slate-50">
              <Image
                src={profilePic}
                alt="Profile"
                blurDataURL={profilePic.blurDataURL}
                placeholder="blur"
                priority={true}
              />
            </Avatar>
            <div>
              <h1 className="text-6xl sm:text-7xl font-bold">
                Rob
                <br />
                Harding
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
            .<br />
            Also, have a look at my{" "}
            <Link href="" className="text-sky-500 hover:text-sky-600">
              resume
            </Link>
            .
          </p>
          <div className="text-center mt-8 hover:cursor-pointer  hover:text-slate-400">
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
        <h1 className="text-6xl sm:text-7xl font-bold text-sky-500">
          PROJECTS
        </h1>
      </section>
      <section className="flex bg-gradient-to-r from-sky-100 to-slate-100 py-16 w-full">
        <div className="w-full flex flex-col gap-10 justify-center">
          <h3 className="sm:text-5xl text-4xl text-center w-full">Featured</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[1000px] mx-auto w-full px-8">
            <a
              href=""
              className="relative flex flex-col overflow-hidden cursor-pointer hover:-translate-x-[3px] duration-200 hover:-translate-y-[3px]"
            >
              <Image src={asm2} alt="" className="object-fit" />
            </a>
            <a
              href=""
              className="relative flex flex-col overflow-hidden cursor-pointer hover:-translate-x-[3px] duration-200 hover:-translate-y-[3px]"
            >
              <Image src={asm2} alt="" className="object-fit" />
            </a>
            <a
              href=""
              className="relative flex flex-col overflow-hidden cursor-pointer hover:-translate-x-[3px] duration-200 hover:-translate-y-[3px]"
            >
              <Image src={asm2} alt="" className="object-fit" />
            </a>
          </div>
          <p className="text-slate-400 text-center font-thin italic">
            More coming soon...
          </p>
        </div>
      </section>
      <section className="text-center p-16 bg-slate-50" id="projects">
        <p>What I&apos;m up to right</p>
        <h1 className="text-6xl sm:text-7xl font-bold text-sky-500">NOW</h1>
      </section>
      <section className="flex bg-gradient-to-r from-sky-100 to-slate-100 py-16 px-10">
        <div className="mx-auto max-w-xl">
          <p className="text-center">
            I&apos;ve moved back to{" "}
            <span className="text-sky-500">Toronto</span> after two
            unforgettable ski seasons in BC. Currently working on building out
            web apps to expand my portfolio. In my free time I like to hit the
            gym as well as playing tennis with my dad. Still can&apos;t beat
            him. Looking forward to a 10 day canoe trip in{" "}
            <span className="text-sky-500">Killarney</span> this August with
            some friends.
          </p>
          <p className="text-slate-400 text-center mt-2 font-thin italic">
            Updated Thursday July 6th, 2023
          </p>
        </div>
      </section>
      <section className="relative bg-gradient-to-r from-sky-100 to-slate-100 h-screen">
        <div className="text-center p-16 bg-slate-50" id="projects">
          <p>Get in touch.</p>
          <h1 className="text-6xl sm:text-7xl font-bold text-sky-500">
            CONTACT
          </h1>
        </div>
        <div className="px-10 max-w-xl m-auto pt-16 flex flex-col gap-8">
          <Mails className="w-14 h-14 mt-4 mx-auto text-primary" />
          <ContactForm />
        </div>
      </section>
      <section></section>
    </main>
  );
}
