import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from 'framer-motion';

const Body: React.FC = () => {
  return (
    <Box>
        <Box>
            <motion.div
            animate='animate'>
                <h1> — WAIT, WHAT THE HACK IS A HACKATHON?</h1>
            </motion.div>
        </Box>
        <Box>
            <Text mb="1rem">
                A <Text color="#ff9140">hackathon</Text> 
                is a social coding event where <Text color="#46daae">teens come together</Text> 
                to <Text color="#ed445c">build projects</Text> 
                in a short amount of time and <Text color="#62c3df">share them with the world</Text>.
            </Text>
        </Box>
    </Box>
    );
};

export default Body;