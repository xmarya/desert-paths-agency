import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { SectionHeading, SectionSubHeading } from "../UI/Headings";
import ServiceCard from "../UI/ServiceCard";
import services from "../data/services";
import dictionary from "../dictionary/dictionary";
import navigateToSection from "../helpers/navigateToSection";

const Contents = styled.section`
  position: relative;
  height: 600svh;
`;

const StickyText = styled.div`
container-type:inline-size;
background-color: var(--colour-main-background);
  position: sticky;
  top: 0;
  height: 10rem;
  margin-bottom: 10rem;
  z-index: 1;
  ${SectionHeading} {
      color: var(--colour-primary-dark-brown);

  }
`;
const Carousel = styled.div`
/* background-color: var(--colour-highlight-background); */
  position: sticky;
  height: calc(100svh - 10rem);
  top: 10rem;
  display: flex;
  align-items: center;
  margin-bottom: 10rem;
  overflow: hidden;
`;

const ServiceList = styled(motion.ul)`
  display: flex;
  gap: 5rem;
`;
export default function OurServices({language}:{language: "ar" | "en"}) {
  const {ourServices:{mainHeading, subHeading, button}} = dictionary[language];
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const xAxisTransform = language === "ar" ? ["-10%", "80%"] : ["80%", "-10%"];
  const x = useTransform(scrollYProgress, [0, 1], xAxisTransform);

  return (
    <Contents ref={scrollRef} id="our-services">
      <StickyText style={{ ...(language === "en" && {direction:"ltr"})}}>
        <SectionHeading>{mainHeading}</SectionHeading>
        <SectionSubHeading>{subHeading}</SectionSubHeading>
      </StickyText>

      <Carousel>
        <ServiceList style={{ x }}>
          {services.map((card, index) => (
            <ServiceCard key={index} title={card.title[language]} src={card.src} />
          ))}
        </ServiceList>
      </Carousel>

      <div style={{position: "sticky", top: "100%", display:"flex", justifyContent:"center"}}>
        <Button onClick={() => navigateToSection("contact-us")}>{button}</Button>
      </div>
    </Contents>
  );
}
