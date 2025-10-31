import styled from "styled-components";
import Button from "../UI/Button";
import { HeroHeading, HeroSubHeading } from "../UI/Headings";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import dictionary from "../dictionary/dictionary";
import navigateToSection from "../helpers/navigateToSection";
import useWindowSize from "../helpers/hooks/useWindowsSize";

const StyledHero = styled(motion.div)`
  color: var(--colour-offWhite);
  height: 100svh;
  max-height: 100svh;

  position: relative;
  transition: all 0.5s ease-out;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: contain;
    z-index: -2;

    @media (max-width: 48em) {
      // 768 / 16
      height: 100svh;
    }
  }
`;

const NoiseBackground = styled.div`
  position: relative;
  width: 100%;
  z-index: -1;
  opacity: 0.6;

`;

const tabletSize = 768;
export default function Hero({language}:{language: "ar" | "en"}) {
  const {hero:{mainHeading, subHeading, button}} = dictionary[language];
  const scrollRef = useRef(null);
  const {scrollYProgress} = useScroll({target:scrollRef});
  const {width} = useWindowSize();
  const marginTo = width > tabletSize ? "5rem" : "0rem";
  const margin = useTransform(scrollYProgress, [0, 1], ["0rem", marginTo]);

  return (
      <StyledHero ref={scrollRef} style={{margin, ...(language === "en" && {direction:"ltr"})}} layout>
        <NoiseBackground>

        <video autoPlay muted loop playsInline>
          <source src="./hero-vid-1.mp4" type="video/mp4"/>
        </video>
        </NoiseBackground>
        <div
          style={{
            containerType: "inline-size",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            paddingInline: "3rem",
          }}>
          <HeroHeading>{mainHeading}</HeroHeading>
          <HeroSubHeading>{subHeading}</HeroSubHeading>
          <Button onClick={() => navigateToSection("contact-us")}>{button}</Button>
        </div>
      </StyledHero>
  );
}
