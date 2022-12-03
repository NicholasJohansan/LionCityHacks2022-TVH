import { Box, Flex, Text } from "@chakra-ui/react";
import Section from "../components/Section";

import mask from '../assets/sand-mask.svg';

const Landing: React.FC = () => {
  return (
    <Section height="100vh" bgColor="rgba(0, 0, 0, 0.4)">
      <Flex alignItems="center" justifyContent="center" height="full" width="full">
        <Box p="8" fontSize="1.4rem" bgColor="#312a16" w="50%" rounded="8" opacity="1" backgroundImage={mask}
        color="#e8e6e3" sx={{
          "fontFamily": "'Apple Chancery', cursive",
        }}>
          <Text mb="1rem">Dear hacker,</Text>
          <Text mb="1rem">
            We're inviting you to 🦁 <Text as="b" color="#ed445c">Lion City Hacks</Text>,
            a hackathon for teenagers in Singapore,
            on <Text as="u" fontStyle="italic">December 3rd</Text>
            at <Text as="u" color="#cbc6c0" fontStyle="italic">Red Hat Singapore</Text>.
            Join us for twelve hours of hacking,
            workshops & friendship.
          </Text>
          <Text>
            <Text as="u" color="#ed445c">RSVP today</Text> or read on for more details.
          </Text>
        </Box>
      </Flex>
    </Section>
  );
};

export default Landing;