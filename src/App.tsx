import { Box } from '@chakra-ui/react'
import Landing from './sections/Landing'

import bgImage from './assets/assemble.jpg'

function App() {

  return (
    <Box
      id='app'
      width="100vw"
      minHeight="100vh">
      <Landing />
      <Box position="absolute" top="0" right="0" left="0" bottom="0" zIndex="-1" backgroundImage={bgImage} backgroundSize="cover" objectFit="fill" />
    </Box>
  )
}

export default App

// id='app'
// height="100vh"
// width="100vw"
// backgroundImage={`url(${bgImage})`}
// backgroundSize="cover"
// backgroundPosition="center"
// backgroundRepeat="no-repeat"