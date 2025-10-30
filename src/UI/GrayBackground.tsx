import styled from "styled-components";
import { SectionHeading } from "./Headings";

const GrayBackground = styled.div<{ $height: string }>`
 
  container-type: inline-size;
  /* min-height: 200svh; */
  min-height: ${(props) => props.$height};
  background-color: var(--colour-highlight-background);
  color: var(--colour-primary-dark-brown);
  display: flex;
  flex-direction: column;
  justify-content: center;
  clip-path: var(--clip-path);

  /* ${SectionHeading} {
    color: var(--colour-offWhite);
  } */
  > * {
    padding-block: 10rem;
  }
`;

export default GrayBackground;
