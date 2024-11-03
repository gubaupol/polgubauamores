import "./global.css";
import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { metadata as constants } from "../lib/constants";
import Sidebar from "./components/navbar";
import { Footer } from "./components/Layout";
import GoTopButton from "./components/go-top-button";
import {Providers} from "./providers";
import { ScrollLine } from "./components/ScrollLine";
 
// 
const APP_NAME = constants.title;
//  
const APP_DEFAULT_TITLE = `${APP_NAME} - Frontend Developer and UX Designer`;
const APP_TITLE_TEMPLATE = `%s | ${APP_NAME}`;
const APP_DESCRIPTION = constants.description;
export const metadata: Metadata = {
  metadataBase: new URL(constants.links.website),
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  alternates: {
    canonical: "/",
  },
  applicationName: APP_NAME,
 
  formatDetection: {
    telephone: false,
  },
  description: APP_DESCRIPTION,
   openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: constants.links.website,
    siteName: APP_NAME,
    locale: "en_US",
    images: [
      {
        url: `${constants.links.website}/brand/thumbnail.png`,
        width: 1920,
        height: 1080,
        alt: `${APP_NAME}' website preview`,
      },
    ],
    type: "website",
  },
  generator: APP_NAME,
  keywords: constants.tags,
  publisher: APP_NAME,
  creator: APP_NAME,
  verification: {
    google: "google3c76d94f17d4b233",
  },
  icons: {
    icon: [
      {
        url: "/brand/favicon.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/brand/favicon_dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: {
      url: "/brand/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
      color: "#ff4",
      rel: "apple-touch-icon",
      media: "light",
      fetchPriority: "high",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [
    {
      name: constants.title,
      url: constants.links.website,
    },
  ],

  twitter: {
    site: constants.links.twitter,
    description: constants.description,
    creator: constants.links.twitter,
    title: constants.title,
    card: "summary_large_image",
  },
  appleWebApp: {
    title: constants.title,
    statusBarStyle: "black-translucent",
    capable: true,
    startupImage: "/brand/apple_splash_2048.png",
  },
};
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ff4" },
    { media: "(prefers-color-scheme: dark)", color: "#ff4" },
  ],
  viewport: "width=device-width, initial-scale=1.0",
  colorScheme: "light dark",
};
export const font = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600"],
});
export default function RootLayout({

   children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html
      lang="en" dir="ltr"
      className={`${font.className} transition-colors duration-200 w-full overflow-x-hidden`}
    >
      <body>
        <Providers>
          <NextTopLoader color="#ff4" height={2} showSpinner={false}  />
          <ScrollLine/>
          <main className="antialiased w-full flex text-secondary-900 bg-secondary-50 dark:text-secondary-50 dark:bg-secondary-900 min-h-screen">
            <div className="mt-8 mb-20 flex-auto flex flex-col w-full px-4 md:px-10 max-w-4xl md:mx-auto">
              <GoTopButton />
              <Sidebar />
              {children}
              <Footer />
            </div>
          </main>
        </Providers>
      </body>

    </html> 
  );
}
