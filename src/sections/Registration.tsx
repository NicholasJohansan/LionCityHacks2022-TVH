import Section from "../components/Section";
import { Box, Text } from "@chakra-ui/react";

const Registration: React.FC = () => {
    return(
        <Section bgColor="#523e86">
            <Text  as="b" fontSize="2rem" color="#FFFFFF" p="1rem"><Text as='u'>The Rundown & Registration</Text></Text>
            <Box bgColor='#181a1b' m='2rem'>
                <Text color="#FFFFFF" p='1rem'>
                    <Text as='b'>Date & Time: </Text> 
                    Starts at 9:00am and ends at 9:00pm on December 3rd.
                </Text>
            </Box>
            <Box bgColor='#181a1b' m='2rem'>
                <Text color="#FFFFFF" p='1rem'>
                    <Text as='b'>Venue:</Text> Red Hat Singapore,
                    <Text>88 Market Street,</Text>
                    <Text>Level 46 of CapitaSpring, Singapore 048948 </Text>
                    <Text opacity="50%">(Nearest MRT: Raffles Place)</Text>
                </Text>
            </Box>

        </Section>
    );
};



export default Registration;