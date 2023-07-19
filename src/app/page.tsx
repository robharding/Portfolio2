import { Avatar } from "@/components/ui/avatar";
import {
  ChevronUpIcon,
  Github,
  LucideLinkedin,
  Mails,
  MoveDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import profilePic from "../../public/profile.jpg";
import ContactForm from "@/components/ContactForm";
import { Balancer } from "react-wrap-balancer";

export default async function Home() {
  return (
    <main className="antialiased text-lg scroll-smooth text-primary">
      <section
        id="hero"
        className="flex h-screen bg-gradient-to-r from-sky-100 to-white"
      >
        <div className="m-auto">
          <div className="flex gap-4 sm:gap-8 justify-center">
            <Avatar className="relative aspect-square h-[8rem] w-[8rem] sm:h-[12rem] sm:w-[12rem] shadow-xl border-2 border-slate-50">
              <Image
                src={profilePic}
                alt="Profile"
                blurDataURL={profilePic.blurDataURL}
                placeholder="blur"
                priority={true}
              />
            </Avatar>
            <div>
              <h1 className="text-5xl sm:text-7xl font-bold italic">
                ROB
                <br />
                HARDING
              </h1>
              <h2 className="text-2xl sm:text-3xl">Web Developer</h2>
            </div>
          </div>
          <p className="text-center mt-20 max-w-md m-auto">
            You can find me on{" "}
            <Link
              href="https://www.linkedin.com/in/robjharding/"
              className="text-sky-500 hover:text-sky-600"
            >
              LinkedIn
            </Link>
            ,{" "}
            <Link
              href="https://github.com/robharding"
              className="text-sky-500 hover:text-sky-600"
            >
              Github
            </Link>
            , or{" "}
            <Link
              href="https://www.threads.net/@robharding__"
              className="text-sky-500 hover:text-sky-600"
            >
              Threads
            </Link>
            .<br />
            Also, have a look at my{" "}
            <Link href="" className="text-sky-500 hover:text-sky-600">
              resume
            </Link>
            .
          </p>
          <div className="group text-center mt-8 hover:cursor-pointer  hover:slate-600">
            <Link href="#projects">
              Click a{" "}
              <span className="text-sky-500 group-hover:text-sky-600">
                link
              </span>{" "}
              or have a scroll
              <MoveDown className="m-auto mt-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="text-center p-16 bg-slate-50" id="projects">
        <p>Want to see more? Check out my</p>
        <h1 className="text-5xl sm:text-7xl font-bold italic">PROJECTS</h1>
      </section>
      <section className="flex bg-gradient-to-r from-sky-100 to-slate-100 py-16 w-full">
        <div className="w-full flex flex-col gap-10 justify-center">
          <h3 className="sm:text-5xl text-4xl text-center w-full">Featured</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 max-w-[1000px] mx-auto w-full px-8">
            <Link
              href="https://breadit.robharding.dev"
              className="cursor-pointer font-semibold py-4 px-6 flex flex-col gap-2 rounded-lg duration-200 shadow-custom hover:-translate-x-1 hover:-translate-y-1 bg-slate-50 hover:bg-white border-slate-900 border border-1"
            >
              <div className="flex gap-2 items-center">
                <Image
                  src="/breadit.png"
                  alt="breadit logo"
                  width={20}
                  height={20}
                />
                <h1 className="text-2xl">Breadit</h1>
              </div>
              <hr />
              <Balancer className="text-slate-500 p-2">
                A reddit clone using NextJS, Auth.js, Redis, and Typescript.
                Features include creating communities & posts, commenting, and
                voting.
              </Balancer>
            </Link>
            <div className="cursor-pointer font-semibold py-4 px-6 flex flex-col gap-2 rounded-lg duration-200 shadow-custom hover:-translate-x-1 hover:-translate-y-1 bg-slate-50 hover:bg-white border-slate-900 border border-1">
              <h1 className="text-2xl">Project 2</h1>
              <hr />
              <Balancer className="text-slate-500 p-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                esse animi repellendus sit harum possimus maxime, rem nihil illo
                distinctio?
              </Balancer>
            </div>
            <div className="cursor-pointer font-semibold py-4 px-6 flex flex-col gap-2 rounded-lg duration-200 shadow-custom hover:-translate-x-1 hover:-translate-y-1 bg-slate-50 hover:bg-white border-slate-900 border border-1">
              <h1 className="text-2xl">Project 3</h1>
              <hr />
              <Balancer className="text-slate-500 p-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                esse animi repellendus sit harum possimus maxime, rem nihil illo
                distinctio?
              </Balancer>
            </div>
          </div>
          <p className="text-slate-400 text-center font-thin italic">
            More coming soon...
          </p>
        </div>
      </section>
      <section className="text-center p-16 bg-slate-50">
        <p>What I&apos;m up to right</p>
        <h1 className="text-5xl sm:text-7xl font-bold italic">NOW</h1>
      </section>
      <section className="flex bg-gradient-to-r from-sky-100 to-slate-100 py-16 px-10">
        <div className="mx-auto max-w-xl">
          <Balancer className="leading-loose">
            I&apos;ve moved back to{" "}
            <span className="text-sky-500">Toronto</span> after two
            unforgettable ski seasons in BC. Currently working on building
            unique web applications to expand my portfolio. In my free time I
            like to hit the gym as well as playing tennis with my dad. Still
            can&apos;t beat him. Looking forward to a 10 day canoe trip in{" "}
            <span className="text-sky-500">Killarney</span> this August with
            some friends.
          </Balancer>
          <p className="text-slate-400 text-center mt-2 font-thin italic">
            Updated Thursday July 6th, 2023
          </p>
        </div>
      </section>
      <section className=" bg-gradient-to-r from-sky-100 to-slate-100">
        <div className="text-center p-16 bg-slate-50">
          <p>Get in touch.</p>
          <h1 className="text-5xl sm:text-7xl font-bold italic">CONTACT</h1>
        </div>
        <div className="px-10 max-w-xl m-auto flex flex-col gap-8 py-16">
          <Mails className="w-14 h-14 mt-4 mx-auto text-primary" />
          <ContactForm />
        </div>
      </section>
      <section className="bg-slate-50 p-16 flex flex-col">
        <div className="flex mx-auto gap-4 items-center">
          <LucideLinkedin className="w-8 h-8 fill-primary hover:fill-slate-600 hover:text-slate-600 hover:cursor-pointer" />
          <Github className="w-8 h-8 fill-primary hover:fill-slate-600 hover:text-slate-600 hover:cursor-pointer" />
        </div>
      </section>
    </main>
  );
}
