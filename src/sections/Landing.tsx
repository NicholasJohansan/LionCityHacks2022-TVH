import { Box, Flex } from "@chakra-ui/react";
import Section from "../components/Section";

import mask from '../assets/sand-mask.svg';

const Landing: React.FC = () => {
  return (
    <Section height="100vh">
      <Flex alignItems="center" justifyContent="center" height="full" width="full">
        <Box p="4" bgColor="#585345" w="60%" rounded="8" opacity="1" sx={{ "&": { "mask-image": `url(${mask})` } }}>
          Dear hacker,

          We're inviting you to 🦁 Lion City Hacks, a hackathon for teenagers in Singapore, on December 3rd at Red Hat Singapore. Join us for twelve hours of hacking, workshops & friendship.

          RSVP today or read on for more details.
        </Box>
      </Flex>
    </Section>
  );
};

export default Landing;