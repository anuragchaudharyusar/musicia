import HeroSection from "@/src/components/HeroSection";
import FeaturedCourses from "@/src/components/FeaturedCourses";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/src/components/TestimonialCards";
import UpcomingWebinars  from "@/src/components/UpcomingWebinars";
import Instructors from "@/src/components/Instructors";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
      
    </main>
  );
}
