import { Box, Flex, Text, Grid, GridItem, Heading} from "@chakra-ui/react";
import { motion, transform, Variants } from 'framer-motion';
import Section from "../components/Section";
import image1 from '../assets/1hack_club_assemble_00711.jpg';
import image2 from '../assets/2hack_club_assemble_01601.jpg';
import image3 from '../assets/0hack_club_assemble_01887.jpg';
const Body: React.FC = () => {
  const variants: Variants = {
    animate: {
        x: [0, -1035],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 24,
                ease: 'linear'
            }
        }
    }
  }

  const hover = {
    translateX: '0.5rem',
    translateY: '-0.5rem',
    transition: {
        duration: 0.1,
        ease: 'linear'
    }
  }

  const [mousePos, setMousePos] = useState({x: 0, y: 0});

  const calculateRepelPos = useCallback((elementPos: {x: number, y: number}) => {
    const x = mousePos.x - elementPos.x;
    const y = mousePos.y - elementPos.y;
    const distance = Math.sqrt(x * x + y * y);
    const force = Math.floor(Math.random() * 200) / (distance * distance);
    const angle = Math.atan2(y, x);
    const repelX = force * Math.cos(angle);
    const repelY = force * Math.sin(angle);
    return {x: repelX, y: repelY};
  }, [mousePos]);

  const [scrollPos, setScrollPos] = useState(0);

  const calculateX = useCallback((elementPos: {x: number, y: number}) => {
    const {x, y} = calculateRepelPos(elementPos);

    return Math.floor(transform(Math.random() * scrollPos , [0, 200], [-100, 100]));
    }, [calculateRepelPos, scrollPos]);

    // typescript on scroll listener
    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


  const onCursorMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const x = transform(clientX, [0, window.innerWidth], [1, 0]);
    const y = transform(clientY, [0, window.innerHeight], [0, 1]);
    // const [x, y] = [clientX, clientY];
    setMousePos({ x, y });
    };

    const startCursorTrack = () => {
        window.addEventListener('mousemove', onCursorMove);
    }

    const stopCursorTrack = () => {
        window.removeEventListener('mousemove', onCursorMove);
    }

  return (
    <Section bgColor="#0e0e12" onMouseEnter={startCursorTrack} onMouseLeave={stopCursorTrack}>
        <Box className="marquee"
            position="relative"
            borderTop="5px solid #ff8c37"
            borderBottom="5px solid #ff8c37"
            h="4.8rem"
            pb="0"
            mb="2rem"
            w="100vw"
            maxW="100%"
            overflowX="hidden">
            <Box as={motion.div}
                position="absolute"
                whiteSpace="nowrap"
                variants={variants}
                animate="animate">
                <Heading color="#ff8c37" my="20px" mx="0" fontSize="1.2rem">
                    WAIT, WHAT THE HACK IS A HACKATHON? - WAIT, WHAT THE HACK IS A HACKATHON? - WAIT, WHAT THE HACK IS A HACKATHON? - WAIT, WHAT THE HACK IS A HACKATHON? - WAIT, WHAT THE HACK IS A HACKATHON? - WAIT, WHAT THE HACK IS A HACKATHON?
                </Heading>
            </Box>
        </Box>
        <Box p="8rem" pt="0">
            <Text as="b" fontSize="2.5rem" color="#FFFFFF">
                A <Text as="b" color="#ff9140" position="relative" sx={{
                    '&': {
                        // use calculateRepelPos
                        left: calculateRepelPos({x: 0, y: 0}).x,
                        top: calculateRepelPos({x: 0, y: 0}).y
                    }
                }}>hackathon</Text> is a social coding event where <Text as="b" color="#46daae" position="relative" sx={{
                    '&': {
                        // use calculateRepelPos
                        left: calculateRepelPos({x: 0, y: 0}).x,
                        top: calculateRepelPos({x: 0, y: 0}).y
                    }
                }}>teens come together </Text> 
                to <Text as="b" color="#ed445c" position="relative" sx={{
                    '&': {
                        // use calculateRepelPos
                        left: calculateRepelPos({x: 0, y: 0}).x,
                        top: calculateRepelPos({x: 0, y: 0}).y
                    }
                }}>build projects</Text> in a short amount of time and <Text as="b" color="#62c3df" position="relative" sx={{
                    '&': {
                        // use calculateRepelPos
                        left: calculateRepelPos({x: 0, y: 0}).x,
                        top: calculateRepelPos({x: 0, y: 0}).y
                    }
                }}>share them with the world.</Text>
                <Text fontWeight="400" mb="8" mt="8">At Tiger Village Hacks, 100+ teenagers will gather to:</Text>
            </Text>
            <Grid templateColumns='repeat(2, 1fr)' gap={4}>
                <GridItem h='25rem' as={motion.div} whileHover={hover}>
                    <Box h='25rem' border='4px' borderColor='#1d9270' p='2rem'>
                        <Text  as="b" fontSize="2rem" color="#FFFFFF" p="1rem">
                            Share Their Knowledge
                        </Text>
                        <Text color="#FFFFFF" fontSize="1rem" p="1rem">
                            At Tiger Village Hacks, you'll be able to give & attend workshops from peers, 
                            gain experience, make connections, and discover yourself. You'll meet new people, 
                            get help from peers, and support your fellow hackers.
                        </Text>
                    </Box>
                </GridItem>
                <GridItem position="relative" sx={{
                    '&': {
                        // use calculateX
                        left: calculateX({x: 0, y: 0})
                    }
                }} h='25rem' bg='blue.500' backgroundImage={image1} backgroundSize="cover"/>
                <GridItem position="relative" sx={{
                    '&': {
                        // use calculateX
                        left: calculateX({x: 0, y: 0})
                    }

                }} h='25rem' bg='blue.500' backgroundImage={image2} objectFit="contain" bgSize="cover"
                />
                <GridItem h='25rem' as={motion.div} whileHover={hover}>
                    <Box h='25rem' border='4px' borderColor='#990f22' p='2rem'>
                        <Text  as="b" fontSize="2rem" color="#FFFFFF" p="1rem">
                            Build The Unexpected
                        </Text>
                        <Text color="#FFFFFF" fontSize="1rem" p="1rem">
                        At Tiger Village Hacks, you're encouraged to create a project no hacker would expect to see at demos. 
                        You'll build something to showcase to other hackers, not pitching to impress a business-type. 
                        Learning and creating is valued far above a long-term product plan.
                        </Text>
                    </Box>
                </GridItem>
                <GridItem h='25rem' as={motion.div} whileHover={hover}>
                    <Box h='25rem' border='4px' borderColor='#1b6e86' p='2rem'>
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
                <GridItem position="relative" sx={{
                    '&': {
                        // use calculateX
                        left: calculateX({x: 0, y: 0})
                    }

                }} h='25rem' bg='blue.500' backgroundImage={image3} backgroundSize="cover"/>
            </Grid>
        </Box>


    </Section>
    );
};

export default Body;