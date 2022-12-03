import Section from "../components/Section";
import { Box, Text } from "@chakra-ui/react";

const Registration: React.FC = () => {
    return(
        <Section bgColor="#523e86">
            <Text  as="b" fontSize="2rem" color="#FFFFFF" p="1rem"><Text as='u'>The Rundown & Registration</Text></Text>
            <Box>
                <Text>
                    <Text as='b'>Date & Time: </Text> 
                    Starts at 9:00am and ends at 9:00pm on December 3rd.
                </Text>
            </Box>
        </Section>
    );
};

export default Registration;