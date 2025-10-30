import styled from "styled-components";
import { SectionHeading } from "./Headings";

const Section = styled.section`
  min-height: 100svh;

  ${SectionHeading} {
    color: var(--colour-primary-dark-brown);
  }
`;

export default Section;