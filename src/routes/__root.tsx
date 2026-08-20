import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { PageTransition } from "@/components/site/PageTransition";
import { SITE_NAME, SITE_DEFAULT_DESCRIPTION, OG_IMAGE, localBusinessJsonLd } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-offwhite px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-charcoal">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-charcoal">Page not found</h2>
        <p className="mt-2 text-sm text-warmgray">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-amber px-5 py-3 text-sm font-semibold text-amber-foreground transition-all hover:bg-amber/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-offwhite px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-charcoal">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-warmgray">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-charcoal px-4 py-2 text-sm font-medium text-offwhite transition-colors hover:bg-charcoal/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-charcoal/15 bg-offwhite px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-charcoal hover:text-offwhite"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE_NAME} — Vans & Trucks You Can Trust` },
      { name: "description", content: SITE_DEFAULT_DESCRIPTION },
      { name: "author", content: SITE_NAME },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#1C1F22" },
      { property: "og:title", content: `${SITE_NAME} — Vans & Trucks You Can Trust` },
      { property: "og:description", content: SITE_DEFAULT_DESCRIPTION },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${SITE_NAME} — Vans & Trucks You Can Trust` },
      { name: "twitter:description", content: SITE_DEFAULT_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-amber focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-amber-foreground"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <div className="bg-offwhite text-charcoal font-sans antialiased overflow-x-hidden">
        <Nav />
        <main id="main-content">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
