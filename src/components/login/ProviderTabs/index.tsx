import { Box } from "@chakra-ui/react";

export const Tabs = () => {
  return (
    <Box>
      <Box role="tablist">
        <Box
          role="tab"
          color="secondary"
          transition="250ms color linear"
          fontWeight="semibold"
          fontSize="1.25rem"
          lineHeight={1.4}
          cursor="pointer"
          textAlign="center"
          p={4}
          pos="relative"
          zIndex={2}
          outline="none"
          _checked={{ color: "white" }}
          _focusVisible={{
            "&>*": {
              outline: "2px dotted white",
              outlineOffset: "2px",
            },
          }}
        ></Box>
      </Box>
    </Box>
  );
};
