import { Box, Flex, Image } from "@chakra-ui/react";
import { motion, useAnimationControls, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import jumpscare from '../assets/redhat.png';

import scream from '../assets/screeeeam.mp3';

interface VideoPopupProps {
  setShown: (shown: boolean) => void;
}

const JumpScare: React.FC<VideoPopupProps> = ({ setShown }: VideoPopupProps) => {
  const controls = useAnimationControls();
  
  const variants: Variants = {
    one: {
      visibility: "visible",
      position: "absolute",
      translateX: "70vw",
      scale: 0.1,
      opacity: 0.2,
      transition: {
        duration: 0.04
      }
    },
    two: {
      translateX: "-70vw",
      scale: 0.15,
      opacity: 0.3,
      transition: {
        duration: 0.04
      }
    },
    three: {
      translateX: "70vw",
      scale: 0.2,
      opacity: 0.4,
      transition: {
        duration: 0.04
      }
    },
    four: {
      translateX: "-70vw",
      scale: 0.25,
      opacity: 0.5,
      transition: {
        duration: 0.04
      }
    },
    five: {
      translateX: "0",
      translateY: "0",
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.02
      }
    },
    six: {
      scale: 0,
      transition: {
        duration: 0.05
      }
    }
  }

  const audioRef = useRef(null);

  const playAudio = (url: any) => {
    return new Promise(res => {
      const audio = new Audio(url);
      audio.onended = res;
      audio.play();
    });
  };

  useEffect(() => {
  (async () => {
    await controls.start("one");
    await controls.start("two");
    await controls.start("three");
    await controls.start("four");
    await controls.start("five");
    await playAudio(scream);
    await controls.start("six");
    setShown(false);
  })();
  }, []);

  return (
    <Flex  bgColor="rgba(0,0,0,0.4)" onClick={(e) => {setShown(false)}} position="fixed" top="0" right="0" bottom="0" left="0" justifyContent="center" alignItems="center">
      <Image visibility="hidden" as={motion.img} initial="one" variants={variants} animate={controls} src={jumpscare} />
    </Flex>
  )
};

export default JumpScare;