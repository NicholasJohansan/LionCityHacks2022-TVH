import Section from "../components/Section";
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import image1 from '../assets/Red-Hat-Singapore-workplace-lounge-reception-1200x675.jpg';
import image2 from '../assets/Red-Hat-Singapore-workplace-canteen-kitchen-collaboration-2000x1125.jpg';

const Registration: React.FC = () => {
    return(
        <Section bgColor="#523e86">
            <Text  as="b" fontSize="2rem" color="#FFFFFF" p="1rem"><Text as='u'>The Rundown & Registration</Text></Text>
            <Box bgColor='#181a1b' m='2rem'>
                <Text color="#FFFFFF" p='1rem'>
                    <Text as='b'>Date & Time: </Text> 
                    Starts at 12:00am and ends at 8:14pm on September 11.
                </Text>
            </Box>
            <Box bgColor='#181a1b' m='2rem'>
                <Text color="#FFFFFF" p='1rem'>
                    <Text as='b'>Venue:</Text> Red Hat Singapore,
                    <Text>88 Market Street,</Text>
                    <Text>Level 46 of CapitaSpring, Singapore 048948 </Text>
                    <Text opacity="50%">(Nearest MRT: Raffles Place)</Text>
                </Text>
                <Grid templateColumns='repeat(2, 1fr)' gap={4}>
                    <GridItem h='5rem' backgroundImage={image1} backgroundSize='cover'/>
                    <GridItem h='5rem' backgroundImage={image2} backgroundSize='cover'/>
                </Grid>
            </Box>

        </Section>
    );
};



export default Registration;