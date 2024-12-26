import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_private")({
  beforeLoad: ({ context }) => {
    if (!context.auth) {
      throw redirect({
        to: "/login",
      });
    }
  },
});
