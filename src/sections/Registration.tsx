import Section from "../components/Section";
import { Box, Text, Flex, Spacer, Button } from "@chakra-ui/react";
import image1 from '../assets/Red-Hat-Singapore-workplace-lounge-reception-1200x675.jpg';
import image2 from '../assets/Red-Hat-Singapore-workplace-canteen-kitchen-collaboration-2000x1125.jpg';
import map from '../assets/IMG_0638.png';

const Registration: React.FC = () => {
    
    const error = () => {
        alert("Please fill in all fields");
    }

    return(
        <Section bgColor="#523e86" pt='2rem'>
            <Text  as="b" fontSize="2rem" color="#FFFFFF" ml='8rem' mr='8rem'><Text as='u'>The Rundown & Registration</Text></Text>
            <Box bgColor='#181a1b' ml='8rem' mr='8rem' mb='1rem' mt='1rem'>
                <Text color="#FFFFFF" p='1rem'>
                    <Text as='b'>Date & Time: </Text> 
                    Starts at 12:00am and ends at 8:14pm on September 11.
                </Text>
            </Box>

                <Box bgColor='#181a1b' ml='8rem' mr='8rem' mb='1rem' mt='1rem'>
                    <Flex>
                    <Text color="#FFFFFF" p='1rem' fontSize='2rem'>
                        <Text as='b'>Venue:</Text> Red Hat Singapore,
                        <Text>88 Market Street,</Text>
                        <Text>Level 46 of CapitaSpring, Singapore 048948 </Text>
                        <Text opacity="50%">(Nearest MRT: Raffles Place)</Text>
                    </Text>
                    <Spacer/>
                    <Box p='1rem'>
                        <Box
                        bgImage={map}
                        bgSize="cover"
                        bgPosition="center"
                        minW="30rem"
                        minH="20rem"
                        />
                    </Box>
                    </Flex>
                </Box>
            
            <Box bgColor='#181a1b' ml='8rem' mr='8rem' mb='1rem' mt='1rem'>
                <Text color="#FFFFFF" p='1rem'>
                    <Text as='b'>Eligibility:</Text> 
                        all secondary school, junior college & polytechnic students are welcome to join (no experience required!).
                </Text>
            </Box>

            <Box bgColor='#181a1b' ml='8rem' mr='8rem' mb='1rem' mt='1rem'>
                <Text color="#FFFFFF" p='1rem'>
                    <Text as='b'>COVID-19:</Text> 
                        We require all participants to be vaccinated against COVID-19 or to have a medical exemption. We will be providing participants with N95 masks (for optional but recommended usage, inline with MOH guidelines).
                    </Text>
            </Box>
       
            <Box bgColor='#21a588' ml='8rem' mr='8rem' mb='1rem' mt='1rem' textAlign='center'>
                    {/* <Text as='b' color='#FFFFFF' textAlign='center' m='2rem'><Text as='u'>Register</Text></Text>  */}
                    <Button colorScheme='#21a588' variant='solid' onClick={()=> error()}>
                        Register
                    </Button>
            </Box>

        </Section>
    );
};



export default Registration;