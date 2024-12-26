import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";

export const UpArrowIcon: FC<IconProps> = (props) => (
  <Icon
    viewBox="0 0 11 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.83325 5.65686L5.83325 1.65686M5.83325 1.65686L9.83325 5.65686M5.83325 1.65686V11.986"
      stroke="#0049C6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
