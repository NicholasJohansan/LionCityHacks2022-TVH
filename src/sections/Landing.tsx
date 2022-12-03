import { Box, Flex, Text, Link, Icon } from "@chakra-ui/react";
import Section from "../components/Section";

import mask from '../assets/sand-mask.svg';

import { BsChevronDown } from 'react-icons/bs'
import { VscChevronDown } from 'react-icons/vsc'
import { motion } from "framer-motion";
import React, { useState } from "react";

import VideoPopup from '../components/VideoPopup';
import JumpScare from '../components/JumpScare';

interface LandingProps {
  contentRef: React.RefObject<HTMLDivElement>
}

const Landing: React.FC<LandingProps> = ({ contentRef }: LandingProps) => {

  const [videoShown, setVideoShown] = useState<boolean>(false);
  const [jumpscareShown, setJumpscareShown] = useState<boolean>(false);

  const changeScroll = () => {
    let style = document.body.style.overflowY;
    document.body.style.overflowY = (style === "hidden") ? "auto" : "hidden";
  };

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log(contentRef.current);
  }

  return (
    <Section height="100vh" bgColor="rgba(0, 0, 0, 0.4)"
      onMouseEnter={changeScroll}
      onMouseLeave={changeScroll}>
      <Flex alignItems="center" justifyContent="center" height="full" width="full">
        <Box pos="relative" p="8" fontSize="1.5rem" bgColor="#e8e0cc" w="50%" rounded="8" opacity="1" backgroundImage={mask}
        color="#1f2d3d" sx={{
          "fontFamily": "'Apple Chancery', cursive",
        }}>
          <Text mb="1rem">Dear hacker,</Text>
          <Text mb="1rem">
            We're inviting you to 🐯 <Text as="b" color="#ed445c">Tiger Village Hacks</Text>,
            a hackathon for teenagers in Singapore,
            on <Text as="u" fontStyle="italic">November 9th</Text> at <Link>
              <Text as="u" color="#1f2d3d" fontStyle="italic" onClick={() => setJumpscareShown(true)}>Red Hat Singapore</Text>.
            </Link> Join us for twelve hours of hacking,
            workshops & friendship.
          </Text>
          <Text>
            <Link>
              <Text as="u" color="#ed445c" onClick={() => setVideoShown(true)}>RSVP today</Text>
            </Link> or read on for more details.
          </Text>

          <Flex as={motion.div} alignItems="center" justifyContent="center" position="absolute" left="0" right="0" bottom="-3rem"
            whileHover={{
              marginBottom: "-10rem",
            }}
          >
              <Box w="auto" h="auto" sx={{ cursor: "pointer" }}>
                <VscChevronDown onClick={() => scrollToContent()} size="3rem" color="white" />
              </Box>
            
          </Flex>
        </Box>
      </Flex>
      { videoShown && <VideoPopup setShown={setVideoShown} /> }
      { jumpscareShown && <JumpScare setShown={setJumpscareShown} /> }
    </Section>
  );
};

export default Landing;