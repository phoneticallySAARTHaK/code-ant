import { Box, BoxProps, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Logo } from "~/icons/Logo";

export const StatsCard: FC<
  {
    stats: Record<"languageSupport" | "developers" | "hoursSaved", string>;
  } & BoxProps
> = ({ stats, ...props }) => {
  return (
    <Box
      bg="white"
      borderRadius="24px"
      border="1px solid #E6E8F0"
      boxShadow="0 0 24px 0px hsla(220, 73%, 12%, 0.16)"
      {...props}
    >
      <Flex px={5} py={5} align="center">
        <Logo mr={2} w="1.75rem" />
        <Text as="span" fontWeight="bold" fontSize="1.125rem">
          AI to Detect & Autofix Bad Code
        </Text>
      </Flex>
      <Box as="hr" borderBottom="1px solid #E6E8F0" />

      <Flex pl={5} pr={10} pt={5} pb={7} gap={12}>
        <Stat label="Language Support" stat="30+" />
        <Stat label="Developers" stat="10K+" />
        <Stat label="Hours Saved" stat="100K+" />
      </Flex>
    </Box>
  );
};

const Stat: FC<{ stat: string; label: string }> = ({ label, stat }) => {
  return (
    <Box>
      <Text
        as="strong"
        align="center"
        display="block"
        color="secondary"
        fontWeight="bold"
        fontSize="1.125rem"
        lineHeight={1.5}
      >
        {stat}
      </Text>
      <Text
        as="span"
        display="block"
        align="center"
        fontSize="0.875rem"
        lineHeight={1.4}
        color="secondary-light"
      >
        {label}
      </Text>
    </Box>
  );
};
