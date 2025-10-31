import { AnimatePresence, motion } from "motion/react";
import { Mosaic } from "react-loading-indicators";

const animationVariants = {
  initial: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.03,
    },
  },
};
export default function LoadingAnimation({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence mode="wait" onExitComplete={() => null}>
      {isLoading && (
        <motion.div
          variants={animationVariants}
          initial="initial"
          exit="exit"
          style={{ width: "100%", height: "100svh", backgroundColor: "var(--colour-main-background)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Mosaic color="var(--colour-primary-dark-brown)" size="medium" text="" textColor="" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
