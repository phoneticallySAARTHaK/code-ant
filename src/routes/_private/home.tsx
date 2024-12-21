import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_private/home")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(public)/home"!</div>;
}
