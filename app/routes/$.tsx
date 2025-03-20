// This is a catch-all route to handle non-existent routes and data requests
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, isRouteErrorResponse, useRouteError } from "@remix-run/react";

export function loader({ request, params }: LoaderFunctionArgs) {
  // Get the URL and path
  const url = new URL(request.url);
  const path = url.pathname;
  
  // Check if this is a data request (used by Remix for client-side navigation)
  const isDataRequest = url.search.includes('_data=routes');
  
  // Handle specific case for blog-montana that's appearing in the error logs
  if (path.includes('/blog-montana')) {
    return json({ 
      status: 404, 
      message: "The requested blog page was not found" 
    }, { 
      status: 404,
      headers: {
        'Cache-Control': 'max-age=60, s-maxage=60'
      }
    });
  }
  
  // For other data requests, return a structured 404 response
  if (isDataRequest) {
    return json({ 
      status: 404, 
      message: "Resource not found" 
    }, { 
      status: 404 
    });
  }
  
  // For direct page visits to non-existent routes
  throw new Response("Not Found", { 
    status: 404,
    headers: {
      'Content-Type': 'text/html'
    }
  });
}

// For direct rendering of the 404 page (when not using a data request)
export function ErrorBoundary() {
  const error = useRouteError();
  
  // Handle route errors (like 404s)
  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4" tabIndex={0}>404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8" tabIndex={0}>The page you're looking for doesn't exist or has been moved.</p>
        <a 
          href="/" 
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Return to the homepage"
          tabIndex={0}
        >
          Return Home
        </a>
      </div>
    );
  }
  
  // For other types of errors
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center" role="alert" aria-live="assertive">
      <h1 className="text-4xl font-bold text-gray-800 mb-4" tabIndex={0}>Something went wrong</h1>
      <p className="text-lg text-gray-600 mb-8" tabIndex={0}>Please try again later.</p>
      <a 
        href="/" 
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Return to the homepage"
        tabIndex={0}
      >
        Return Home
      </a>
    </div>
  );
}

export default function CatchAllRoute() {
  // This component should never render directly, as the loader should always throw a 404
  return null;
}
