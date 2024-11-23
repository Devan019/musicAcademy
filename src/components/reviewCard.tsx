"use client";
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
const MusicAcademyTestimonials = [
    {
      quote:
        "The instructors at this academy transformed my love for music into real skill. I never imagined I'd be performing confidently in front of an audience within months!",
      name: "Emily Johnson",
      title: "Piano Enthusiast",
    },
    {
      quote:
        "Joining this music academy was the best decision I've ever made. The lessons are fun, engaging, and tailored to my pace. My guitar skills have improved dramatically!",
      name: "Michael Smith",
      title: "Guitar Student",
    },
    {
      quote:
        "As a parent, I couldn't be happier with the progress my child has made. The supportive environment and passionate teachers have helped foster a true love for music.",
      name: "Sophia Brown",
      title: "Parent of a Vocal Student",
    },
    {
      quote:
        "This academy isn't just about learning music; it's about creating lifelong memories. The collaborative sessions and recitals helped me connect with like-minded music lovers.",
      name: "Daniel Carter",
      title: "Drumming Enthusiast",
    },
    {
      quote:
        "The music production course exceeded all my expectations. I now have the confidence and skills to produce my own tracks. Thank you for making my dream a reality!",
      name: "Jessica Green",
      title: "Music Production Student",
    },
  ];
  
const ReviewCard = () => {
    return (
        <div className="h-screen max-w-full overflow-x-hidden dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            <div>
                <h2  className='m-4 text-center text-3xl font-semibold'>Hear our Harmony : Voice of success</h2>
                <InfiniteMovingCards
                  className='overflow-hidden'
                  items={MusicAcademyTestimonials}
                  direction="left"
                  speed="normal"
                />
            </div>
        </div>
    )
}

export default ReviewCard