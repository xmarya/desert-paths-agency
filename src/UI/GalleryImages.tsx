import { motion, MotionValue } from "motion/react";
import styled from "styled-components";

const ImageHolder = styled(motion.div)`
  overflow: hidden;
  img {
    width: 55rem;
    transition: 0.5s all ease;
  }
`;

type Props = {
  imgName: number;
  scale: MotionValue;
  y: MotionValue;
};
export default function GalleryImages({ imgName, scale, y }: Props) {
  return (
    <ImageHolder style={{ y }} transition={{ delay: imgName * 0.25 }}>
      <motion.img style={{ scale }} transition={{ delay: imgName * 0.5 }} src={`/${imgName}.jpg`} alt={`Our-work-${imgName}`} loading="lazy" />
    </ImageHolder>
  );
}
