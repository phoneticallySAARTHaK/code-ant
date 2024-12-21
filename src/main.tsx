import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import ReactDOM from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import { theme } from "./theme";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultStructuralSharing: true,
  context: {
    auth: true,
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
      <RouterProvider router={router} />
      <TanStackRouterDevtools position="bottom-right" router={router} />
    </ChakraProvider>,
  );
}
