"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
const content = [
  {
    title: "Personalized Music Lessons",
    description:
      "Unlock your potential with customized music lessons tailored to your skill level and interests. Our experienced instructors provide one-on-one sessions to help you master your instrument, refine your voice, or develop your musical skills in a supportive environment.",
  },
  {
    title: "Real-Time Feedback",
    description:
      "Improve faster with real-time feedback during your lessons. Our instructors guide you every step of the way, offering constructive advice and encouragement as you learn and grow. Stay motivated and watch your skills flourish.",
  },
  {
    title: "Diverse Course Options",
    description:
      "From classical to contemporary, explore a wide range of musical styles and techniques. Whether you're passionate about piano, guitar, vocals, or music production, our academy has courses designed to inspire and challenge students of all ages.",
  },
  {
    title: "Collaborative Learning Environment",
    description:
      "Join a vibrant community of music enthusiasts. Collaborate with fellow students, participate in group performances, and share your passion for music. Our academy fosters a supportive and inclusive atmosphere where creativity thrives.",
  },
];



export function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
