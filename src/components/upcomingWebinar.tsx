import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";
const projects = [
    {
        title: "MelodyHub",
        description:
            "An innovative platform connecting musicians, producers, and fans to collaborate, share, and discover new music.",
        link: "https://melodyhub.com",
    },
    {
        title: "RhythmStream",
        description:
            "A music streaming service offering a vast library of songs, podcasts, and live radio from around the world.",
        link: "https://rhythmstream.com",
    },
    {
        title: "HarmonicAI",
        description:
            "A cutting-edge technology company using AI to compose, remix, and analyze music like never before.",
        link: "https://harmonicai.com",
    },
    {
        title: "ChordLab",
        description:
            "An online platform providing tools and resources for learning, composing, and experimenting with music theory and chords.",
        link: "https://chordlab.com",
    },
    {
        title: "AcousticMart",
        description:
            "An e-commerce platform specializing in musical instruments, audio equipment, and accessories for musicians of all levels.",
        link: "https://acousticmart.com",
    },
    {
        title: "VirtuosoAcademy",
        description:
            "An online music academy offering personalized lessons, tutorials, and resources for mastering your favorite instrument or voice.",
        link: "https://virtuosoacademy.com",
    },
];


const UpcomingWebinar = () => {
    return (
        <div className="w-full min-h-screen bg-blue-950/30 mx-auto">
            <h3 className="p-4 uppercase text-xl text-green-600/90 text-center">featured webinars</h3>
            <h2 className="text-center text-3xl ">Enhance your music Journey</h2>
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center mt-[5%]">
                    <HoverEffect items={projects} className="w-4/5"/>
                </div>
            </div>

            <Link href={"/allcourses"}>
                <button className="relative left-[45%] inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Upcoming webinars
                </button>
            </Link>
        </div>
    )
}

export default UpcomingWebinar