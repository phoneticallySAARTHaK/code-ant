import { ReactNode } from "react";
import { ButtonLink } from "../Link";

export const ProivderButton = ({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) => {
  return (
    <ButtonLink
      bg="white"
      to="/home"
      iconSpacing="1rem"
      sx={{
        "& > span > svg": {
          w: "1.5rem",
        },
      }}
      leftIcon={icon}
      alignItems="center"
      lineHeight={1.5}
      borderRadius="8px"
      border="1px solid #D8DAE5"
      maxW="28rem"
      w="100%"
      py={4}
      h="auto"
      _hover={{
        bg: "#F5F5F5",
      }}
      _active={{
        bg: "#E5E5E5",
      }}
    >
      {children}
    </ButtonLink>
  );
};
