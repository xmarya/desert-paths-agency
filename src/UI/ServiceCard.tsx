import styled from "styled-components";
import { motion, type MotionStyle } from "motion/react";

const Card = styled(motion.li)`
  container-type: inline-size;
  width: 40cqi;
  /* height: calc(35cqi - 15rem); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
  border-radius: var(--sm-radius);
  overflow: hidden; // to control the img scaling
  
  p {
    width: 100%;
    background-color: var(--colour-primary-medium-brown);
    color: #F3F4F6;
    font-size: clamp(1.6rem, 1cqi, 2rem);
    text-align: center;
    font-weight: 800;
  }
  img {
    width: 100%;
    height: 100%;

  }
`;

type Props = {
  title: string;
  src: string;
  //   style:React.CSSProperties
  // style: MotionStyle;
};
export default function ServiceCard({ title, src }: Props) {
  return (
    <Card>
      <img src={src} alt={title} />
      <p>{title}</p>
    </Card>
  );
}
