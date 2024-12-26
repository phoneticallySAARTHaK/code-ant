import { Button, Link as CL } from "@chakra-ui/react";
import { createLink, LinkComponent } from "@tanstack/react-router";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const ChakraLinkComponent = forwardRef<
  HTMLAnchorElement,
  Omit<ComponentPropsWithoutRef<typeof CL>, "href">
>((props, ref) => {
  return <CL ref={ref} {...props} />;
});

const CreatedLinkComponent = createLink(ChakraLinkComponent);

export const LinkLink: LinkComponent<typeof ChakraLinkComponent> = (props) => {
  return <CreatedLinkComponent preload="intent" {...props} />;
};

const ChakraButtonComponent = forwardRef<
  HTMLAnchorElement,
  Omit<ComponentPropsWithoutRef<typeof Button>, "href">
>((props, ref) => {
  return <Button as="a" ref={ref} {...props} />;
});

const CreatedBtnComponent = createLink(ChakraButtonComponent);

export const ButtonLink: LinkComponent<typeof ChakraButtonComponent> = (
  props,
) => {
  return <CreatedBtnComponent preload="intent" {...props} />;
};
