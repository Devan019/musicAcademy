import React from 'react'
import coursesData from '@/data/musicsource.json'
import { BackgroundGradient } from './ui/background-gradient'
import Link from 'next/link'


const Cardsection = () => {

    interface Course {
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
        image: string,
    }

    return (
        <>
            <div className='w-full min-h-screen bg-blue-950/30'>
                <h1 className='p-4 uppercase text-xl text-green-600/90 text-center'>Featured Courses</h1>

                <p className='text-center text-3xl '>Learn with the Best</p>

                <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 place-items-center grid-rows-3 min-h-screen'>
                    {coursesData.courses.map((course: Course, idx) =>
                        idx < 6 ?
                            <div key={course.id} className='hover:cursor-pointer text-center m-4 relative'>
                                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 h-[220px] relative ">
                                    <h2 className='text-xl font-semibold'>{course.title}</h2>
                                    <p className='text-white/70 '>{course.description}</p>
                                    <Link href={`courses/${course.slug}`}>
                                        <button className="p-[3px] absolute bottom-2 left-1/2 -translate-x-1/2">
                                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                            <div className="px-8 py-2 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                                Expolre
                                            </div>
                                        </button>
                                    </Link>
                                </BackgroundGradient>

                            </div>
                            : null
                    )}
                </div>
                <Link href={"/allcourses"} className='flex  justify-center m-4 items-center'>
                    <button className=" inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        All courses
                    </button>
                </Link>

            </div>
        </>
    )
}

export default Cardsection