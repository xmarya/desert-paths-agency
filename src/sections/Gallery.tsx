import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import styled from "styled-components";
import GalleryImages from "../UI/GalleryImages";
import { SectionHeading, SectionSubHeading } from "../UI/Headings";
import Section from "../UI/Section";
import dictionary from "../dictionary/dictionary";

const StyledGallery = styled.div`
  height: 100%;
  
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  margin-top: 4rem;
`;

export default function Gallery({language}:{language: "ar" | "en"}) {
  const {gallery:{mainHeading, subHeading}} = dictionary[language];
  const scalingRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scalingRef });
  const scale = useTransform(scrollYProgress, [0, 0.6], [1.1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100px"]);

  return (
    <Section ref={scalingRef} style={{backgroundColor:"var(--colour-highlight-background)", paddingBlock:"5rem"}}>
      <SectionHeading>{mainHeading}</SectionHeading>
      <SectionSubHeading>{subHeading}</SectionSubHeading>
      <StyledGallery>
        {
        [1, 2, 3, 4].map((imgName) => 
          <GalleryImages key={imgName} imgName={imgName} scale={scale} y={y} />
        )}
      </StyledGallery>
    </Section>
  );
}
