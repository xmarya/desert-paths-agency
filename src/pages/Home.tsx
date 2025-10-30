import { useContext } from "react";
import ContactUs from "../sections/ContactUs";
import Gallery from "../sections/Gallery";
import Hero from "../sections/Hero";
import OurPartnerships from "../sections/OurPartnerships";
import OurServices from "../sections/OurServices";
import Vision2030 from "../sections/Vision2030";
import WhoWeAre from "../sections/WhoWeAre";
import WhyUs from "../sections/WhyUs";
import GrayBackground from "../UI/GrayBackground";
import { LanguageContext } from "../helpers/hooks/LanguageContext";
import { Helmet } from "@dr.pogodin/react-helmet";
import dictionary from "../dictionary/dictionary";

export default function Home() {
  const { language } = useContext(LanguageContext);
  const {
    metadata: { home },
  } = dictionary[language];

  return (
    <>
      <Helmet key={language}>
        <title>{home.title}</title>
        <meta name="lang" content={language} />
        <meta name="description" content={home.description} />
        <meta name="generator" content={home.generator} />
        <meta name="creator" content={home.creator} />
        <meta name="publisher" content={home.publisher} />
        <meta name="mobile-web-app-capable" content={home["mobile-web-app-capable"]} />
        <meta name="apple-mobile-web-app-title" content={home["apple-mobile-web-app-title"]} />
        <meta name="apple-mobile-web-app-status-bar-style" content={home["apple-mobile-web-app-status-bar-style"]} />
        <meta property="og:title" content={home["og:title"]} />
        <meta property="og:description" content={home["og:description"]} />
        <meta property="og:url" content={home["og:url"]} />
        <meta property="og:image" content={home["og:image"]} />
        <meta property="og:type" content={home["og:type"]} />
      </Helmet>
      <Hero language={language} />
      <GrayBackground $height="200svh" style={{ ...(language === "en" && { direction: "ltr" }) }}>
        <WhoWeAre language={language} />
        <WhyUs language={language} />
      </GrayBackground>
      <OurServices language={language} />
      <OurPartnerships language={language} />
      <Gallery language={language} />
      <Vision2030 language={language} />
      <ContactUs language={language} />
    </>
  );
}
