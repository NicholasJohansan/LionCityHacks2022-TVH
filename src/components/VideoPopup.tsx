import { Box, Flex } from "@chakra-ui/react";

interface VideoPopupProps {
  setShown: (shown: boolean) => void;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ setShown }: VideoPopupProps) => {
  const closePopup =() => {
    
    setShown(false)
  };
  return (
    <Flex  bgColor="rgba(0,0,0,0.4)" onClick={(e) => {setShown(false)}} position="fixed" top="0" right="0" bottom="0" left="0" justifyContent="center" alignItems="center">
      <Box w="80%" h="80%" overflow="hidden" rounded="16" onClick={(e) => e.stopPropagation()}>
      <iframe allow="autoplay" width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1">
      </iframe>
      </Box>
    </Flex>
  )
};

export default VideoPopup;