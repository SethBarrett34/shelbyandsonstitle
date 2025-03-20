import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getOptionalServerEnvVar } from "~/utils/env.server";

// Safely expose non-sensitive environment variables to the client
type LoaderData = {
  ENV: {
    APP_ENV: string;
    STRIPE_PUBLISHABLE_KEY: string;
  };
};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({
    ENV: {
      APP_ENV: getOptionalServerEnvVar("APP_ENV", "development"),
      STRIPE_PUBLISHABLE_KEY: getOptionalServerEnvVar("STRIPE_PUBLISHABLE_KEY", ""),
    },
  });
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "/build/tailwind.css" },
  { rel: "stylesheet", href: "/styles/base.css" },
  { rel: "stylesheet", href: "/styles/home.css" },
  // Google Fonts - Professional combination for Title Company
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { 
    rel: "stylesheet", 
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@500;600;700&family=Playfair+Display:wght@400;700&display=swap"
  },
  { rel: "icon", href: "/favicon.ico" },
];

export const meta: MetaFunction = () => {
  return [
    { charSet: "utf-8" },
    { title: "Shelby and Sons Title Company" },
    { name: "description", content: "Professional title company providing reliable services for residential and commercial real estate transactions." },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    // Meta tags for SEO and social sharing
    { name: "keywords", content: "title company, real estate, title services, title insurance, closing services, escrow" },
    { property: "og:title", content: "Shelby and Sons Title Company" },
    { property: "og:description", content: "Professional title company providing reliable services for residential and commercial real estate transactions." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Shelby and Sons Title Company" },
    { name: "twitter:description", content: "Professional title company providing reliable services for residential and commercial real estate transactions." },
  ];
};

export default function App() {
  const data = useLoaderData<LoaderData>();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-white text-gray-900 font-inter">
        <Outlet />
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
