import BlogsAndArticles from "@/components/Home/BlogsAndArticles";
import Hero from "@/components/Home/Hero";
import IncentivesCards from "@/components/Home/IncentivesCards";
import ProjectGallery from "@/components/Home/ProjectGallery";
import RenewableSection from "@/components/Home/RenewableSection";
import SeeOurWorkSection from "@/components/Home/SeeOurWorkSection";
import SolarProductsSection from "@/components/Home/SolarProductsSection";
import SolarSolutionsSection from "@/components/Home/SolarSolutionsSection";
import SolarStatsAndIncentives from "@/components/Home/SolarStatsAndIncentives";
import TestimonialsSection from "@/components/Home/TestimonialsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <RenewableSection />
      <SolarProductsSection />
      <SolarSolutionsSection />
      <TestimonialsSection />
      <SeeOurWorkSection />
      <ProjectGallery />
      <SolarStatsAndIncentives />
      <IncentivesCards />
      <BlogsAndArticles />
    </>
  );
};

export default Home;
