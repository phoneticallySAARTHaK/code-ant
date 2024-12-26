import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import ReactDOM from "react-dom/client";
import "./index.css";
import { routeTree } from "./routeTree.gen";
import { Fonts, theme } from "./theme";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultStructuralSharing: true,
  context: {
    auth: false,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ChakraProvider theme={theme}>
      <Fonts />
      <RouterProvider router={router} />
      <TanStackRouterDevtools position="bottom-right" router={router} />
    </ChakraProvider>,
  );
}
