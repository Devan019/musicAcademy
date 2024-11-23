"use client"
import React from 'react'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";



const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Form submitted");
};


const page = () => {
  return (
    <div className='h-screen w-full'>

      <div className='flex justify-center items-center flex-col text-center mt-[20vh]'>
        <h2 className="font-bold text-5xl text-neutral-800 dark:text-neutral-200">
          Contact Us
        </h2>
        <p className="text-neutral-600 text-xl max-w-xl mt-2 dark:text-neutral-300">
          We're here to help with any quetions about our courses, programme, or events.Reach out  and let us know how we can assist you in your musical journey
        </p>

        <form className="my-8 z-10 text-start" onSubmit={handleSubmit} >

          <div>
            <LabelInputContainer className="mb-4">
              <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Input className='h-[20vh] w-[70vw] text-start p-0 m-0' id="message" placeholder="enter your message" type="text" />
            </LabelInputContainer>
          </div>
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            SUBMIT &rarr;
            <BottomGradient />
          </button>
        </form>

      </div>

      <BackgroundBeams className='-z-10' />
    </div>
  )
}

export default page

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};


const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};