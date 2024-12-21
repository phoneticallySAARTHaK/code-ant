import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/privacy-policy")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>privacy-policy</div>;
}
