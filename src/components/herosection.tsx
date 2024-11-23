import Link from "next/link"
import Button from "./ui/moving-border";
import { Spotlight } from "./ui/spotlight";

const Hero = () => {
    return (
        <>
            <div className="hero text-center flex flex-col justify-center items-center">
                <Spotlight
                    className=" left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <h2 className="text-white text-7xl font-bold p-12">Master the Art of Music </h2>
                <p className="w-[400px] text-xl flex justify-center items-center">
                    Dive into our comprehensive music courses and transform your musical journey today.Whether you're a beginner or looking to refine your skills, join us to unlock your true potential
                </p>
                <Link className="m-20" href={"/allcourses"}>
                    <Button
                    className=" bg-zinc-950  dark:text-white border-slate-800"
                    >Explore Courses</Button>
                </Link>
            </div>
        </>
    )
}

export default Hero