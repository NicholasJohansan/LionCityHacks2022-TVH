import { Box, Flex, Text, Grid, GridItem} from "@chakra-ui/react";
import { motion, transform } from 'framer-motion';
import Section from "../components/Section";
import share from '../assets/share.svg';
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
                    <Box h='25rem' border='2px' borderColor='#1d9270' p='5rem'>
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
                <GridItem h='25rem' bg='blue.500' />
                <GridItem h='25rem' bg='blue.500' />
                <GridItem h='25rem' bg='blue.500' />
                <GridItem h='25rem' bg='blue.500' />
                <GridItem h='25rem' bg='blue.500' />
            </Grid>
        </Box>
    </Section>
    );
};

export default Body;