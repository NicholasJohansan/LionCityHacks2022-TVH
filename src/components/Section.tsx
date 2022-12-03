import { Box, BoxProps } from "@chakra-ui/react";

const Section: React.FC<React.PropsWithChildren<BoxProps>> = (props: React.PropsWithChildren<BoxProps>) => {
  return (
    <Box
      className="page"
      width="full" {...props}>
    </Box>
  );
};

export default Section;