import { Box, Flex, Text, Grid, GridItem} from "@chakra-ui/react";
import { motion, transform } from 'framer-motion';
import Section from "../components/Section";

import image1 from '../assets/1hack_club_assemble_00711.jpg';
import image2 from '../assets/2hack_club_assemble_01601.jpg';
import image3 from '../assets/0hack_club_assemble_01887.jpg';

import icon1 from '../assets/IMG_0642.png'
import icon2 from '../assets/IMG_0643.png'
import icon3 from '../assets/D9CAD53D-1A9D-4E7F-BC52-834443D8FE8A.jpg'

const Body: React.FC = () => {
  return (
    <Section bgColor="#0e0e12">
        <Box>
            <motion.div
            animate='animate'>
                <Text color="#FFFFFF"> — WAIT, WHAT THE HACK IS A HACKATHON?</Text>
            </motion.div>
        </Box>
        <Box p="8rem">
            <Text as="b" fontSize="3rem" color="#FFFFFF">
                A <Text as="b" color="#ff9140">hackathon</Text> is a social coding event where <Text as="b" color="#46daae">teens come together </Text> 
                to <Text as="b" color="#ed445c">build projects</Text> in a short amount of time and <Text as="b" color="#62c3df">share them with the world.</Text>
                <Text>At Lion City Hacks, 100+ teenagers will gather to:</Text>
            </Text>
            <Grid templateColumns='repeat(2, 1fr)' gap={4}>

                <GridItem h='25rem'>
                    <Box h='25rem' border='2px' borderColor='#1d9270' p='2rem'>
                        <Text  as="b" fontSize="2rem" color="#FFFFFF" p="1rem">
                            Share Their Knowledge
                        </Text>
                        <Text color="#FFFFFF" fontSize="1rem" p="1rem">
                            At Lion City Hacks, you'll be able to give & attend workshops from peers, 
                            gain experience, make connections, and discover yourself. You'll meet new people, 
                            get help from peers, and support your fellow hackers.
                        </Text>
                    </Box>
                </GridItem>

                <GridItem h='25rem' bg='blue.500' backgroundImage={image1} backgroundSize="cover"/>
                <GridItem h='25rem' bg='blue.500' backgroundImage={image2} backgroundSize="cover"/>

                <GridItem h='25rem'>
                    <Box h='25rem' border='2px' borderColor='#990f22' p='2rem'>
                        <Text  as="b" fontSize="2rem" color="#FFFFFF" p="1rem">
                            Build The Unexpected
                        </Text>
                        <Text color="#FFFFFF" fontSize="1rem" p="1rem">
                            At Lion City Hacks, you're encouraged to create a project no hacker would expect to see at demos. 
                            You'll build something to showcase to other hackers, not pitching to impress a business-type. 
                            Learning and creating is valued far above a long-term product plan.
                        </Text>
                    </Box>
                </GridItem>

                <GridItem h='25rem'>
                    <Box h='25rem' border='2px' borderColor='#1b6e86' p='2rem'>
                        <Text  as="b" fontSize="2rem" color="#FFFFFF" p="1rem">
                            Create Lifelong Memories
                        </Text>
                        <Text color="#FFFFFF" fontSize="1rem" p="1rem">
                            We won't be coding all twelve hours. We'll come together to have fun, 
                            get to know one another and participate in all sorts of activities. 
                            The people you meet at a hackathon are special, 
                            you'll have wonderful conversations with your fellow attendees and get inspired from each other.
                        </Text>
                    </Box>
                </GridItem>

                <GridItem h='25rem' bg='blue.500' backgroundImage={image3} backgroundSize="cover"/>
            </Grid>
        </Box>


    </Section>
    );
};

export default Body;