import { Box, Flex, Text, Grid, GridItem} from "@chakra-ui/react";
import { motion } from 'framer-motion';
import Section from "../components/Section";

const Body: React.FC = () => {
  return (
    <Section bgColor="#0e0e12">
        <Box>
            <motion.div
            animate='animate'>
                <Text color="#FFFFFF"> — WAIT, WHAT THE HACK IS A HACKATHON?</Text>
            </motion.div>
        </Box>
        <Box p="5rem">
            <Text as="b" fontSize="3rem" color="#FFFFFF">
                A <Text as="b" color="#ff9140">hackathon</Text> is a social coding event where <Text as="b" color="#46daae">teens come together </Text> 
                to <Text as="b" color="#ed445c">build projects</Text> in a short amount of time and <Text color="#62c3df">share them with the world.</Text>
                At Lion City Hacks, 100+ teenagers will gather to:
            </Text>
        </Box>
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
        </Grid>
    </Section>
    );
};

export default Body;