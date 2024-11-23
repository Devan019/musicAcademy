import Herosection from '@/components/herosection'
import Cardsection from '@/components/featuredCourses';
import { WhyChooseUs } from '@/components/whyChooseUs';
import ReviewCard from '@/components/reviewCard';
import UpcomingWebinar from '@/components/upcomingWebinar';
import TooltipSection from '@/components/Instructer';
import Footer from '@/components/footer';
export default function Home() {
  return (
    <>
      <main className=''>
        <div className="w-full h-screen flex justify-center items-center ">
          <Herosection />
        </div>
        <Cardsection />
        <WhyChooseUs />
        <ReviewCard />
        <UpcomingWebinar />
        <TooltipSection />
      </main>
    </>
  );
}
