// This is a catch-all route to handle static files in development
import { LoaderFunctionArgs } from "@remix-run/node";

export function loader({ request }: LoaderFunctionArgs) {
  // Return a 404 status since we want to allow
  // the static middleware to try to handle it
  throw new Response("Not Found", { status: 404 });
}

export default function CatchAllRoute() {
  return null;
}
