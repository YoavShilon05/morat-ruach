import ContactFooter from "@/pages/components/ContentFooter/ContentFooter.tsx";
import { Box } from "@chakra-ui/react";
import FAQSection from "@/pages/components/FaqSection/FaqSection.tsx";
import Navbar from "@/components/Navbar/Navbar.tsx";
import Hero from "@/pages/components/Hero/Hero.tsx";
import TrailerSection from "@/pages/components/TrailerSection/TrailerSection.tsx";
import VideoGallery from "@/pages/components/VideoGallery/VideoGallery.tsx";
import AboutUs from "@/pages/components/AboutUs/AboutUs.tsx";
import ArticlesSection from "@/pages/components/ArticlesSection/ArticlesSection.tsx";
import ShowSchedule from "@/pages/components/ShowSchedule/ShowSchedule.tsx";
import {AudienceComments} from "@/pages/components/AudienceComments/AudienceComments.tsx";

export const MainPage = () => {
  return (
    <>
      <Box dir="rtl">
        <Navbar />
        <Hero />
        <TrailerSection />
        {/*<InviteCTA />*/}
        <AudienceComments />
        <VideoGallery />
        <AboutUs />
        <ArticlesSection />
        <ShowSchedule />
        <FAQSection />
        <ContactFooter />
      </Box>
    </>
  );
};