import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-modal-video/scss/modal-video.scss";
import "./globals.scss";

import Script from "next/script";

import InitializeAOS from "@/helper/InitializeAOS";
import RouteScrollToTop from "@/helper/RouteScrollToTop";

export const metadata = {
  title: "PPSI Digjaya | Persatuan Pencak Silat Indonesia DPW Jawa Barat",
  description:
    "Website resmi PPSI Digjaya untuk pelestarian pencak silat tradisional, program budaya, keanggotaan, dan dukungan atlet Jawa Barat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Edu+VIC+WA+NT+Beginner:wght@400..700&family=Hubot+Sans:ital,wght@0,200..900;1,200..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Outfit:wght@100..900&display=swap'
          rel='stylesheet'
        />
        <link rel="icon" type="image/png" href="/assets/images/favicon.png" />

        <link rel="stylesheet" href="/assets/fonts/css/all.min.css" />
        <link rel="stylesheet" href="/assets/fonts/css/flag-icons.min.css" />
        <link rel="stylesheet" href="/assets/fonts/css/ppsi.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/default-theme.css" id="switch-color" />
        <link rel="stylesheet" href="/assets/css/sticky-header.css" />
        <link rel="stylesheet" href="/assets/css/box-layout.css" />
      </head>
      <body suppressHydrationWarning={true}>
        <InitializeAOS />
        <RouteScrollToTop />

        {children}
      </body>
    </html>
  );
}
