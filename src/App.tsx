import { Box } from '@chakra-ui/react'
import Landing from './sections/Landing'
import Body from './sections/Body'

import bgImage from './assets/assemble.jpg'
import samPoder from './assets/wtf.jpg'
import { useRef } from 'react'

function App() {

  const contentBoxRef = useRef(null);

  return (
    <Box
      id='app'
      width="100vw"
      minHeight="100vh">
      <Landing contentRef={contentBoxRef} />
      <Box
        position="absolute"
        top="0" right="0" left="0" bottom="0"
        zIndex="-1"
        backgroundImage={samPoder}
        backgroundRepeat="repeat"
        // backgroundSize="cover"
         />
      <Box h="0" ref={contentBoxRef} />
      <Body />
    </Box>
  )
}

export default App