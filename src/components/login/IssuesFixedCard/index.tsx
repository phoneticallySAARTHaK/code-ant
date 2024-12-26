import { Box, BoxProps, Grid, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { FC } from "react";
import { AnimatedNumber } from "~/components/AnimatedNumber";
import { IssuesCardIcon } from "~/icons/IssuesCardIcon";
import { UpArrowIcon } from "../../../icons/UpArrowIcon";

const grow = keyframes`from {transform: scale(0);}
to{transform: scale(1);}`;

/**
 * [Figma Link](https://www.figma.com/design/3j3bEI8nR1T1UwsfEBMbhi/Frontend-Developer-%3C%3E-CodeAnt?node-id=1-7241&t=gvVdu4m5hVOMCUr9-4)
 */
export const IssuesFixedCard: FC<
  { issuesFixed: string; increase: number } & BoxProps
> = ({ increase, issuesFixed, ...props }) => {
  const animationDuration = 750;
  return (
    <Grid
      bg="white"
      py={4}
      pl={8}
      pr={7}
      borderRadius="24px"
      boxShadow="0 0 24px 0px hsla(220, 73%, 12%, 0.16)"
      {...props}
      templateColumns="auto auto"
      justifyContent="space-between"
      rowGap={5}
      columnGap={9}
    >
      <IssuesCardIcon w="3.5rem" />

      <Box alignSelf="center">
        <Text
          as="strong"
          display="inline-flex"
          alignItems="center"
          fontWeight="bold"
          fontSize="0.875rem"
          color="#0049C6"
        >
          <UpArrowIcon
            h="0.75rem"
            animation={`${grow} ${animationDuration}ms ease-out`}
            verticalAlign="middle"
            transformOrigin="bottom"
            mr="0.5rem"
          />
          <AnimatedNumber
            duration={animationDuration}
            play={true}
            value={increase}
          />
          %
        </Text>
        <Text color="secondary-light" fontSize="0.75rem" lineHeight={1.33}>
          This week
        </Text>
      </Box>

      <Box>
        <Text
          as="strong"
          display="block"
          fontWeight="bold"
          fontSize="2rem"
          color="secondary"
          lineHeight={1}
        >
          {issuesFixed}+
        </Text>
        <Text as="span" fontWeight="bold" fontSize="0.875rem" lineHeight={1.4}>
          Issues Fixed
        </Text>
      </Box>
    </Grid>
  );
};
