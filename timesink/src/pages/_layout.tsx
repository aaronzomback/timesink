import localFont from "next/font/local";

export const LYON = localFont({
  src: [
    {
      path: "../../public/fonts/LyonDisplay-Light-Web.woff",
    },
    {
      path: "../../public/fonts/LyonDisplay-Light-Web.woff2",
    },
  ],
  variable: "--font-lyon",
});

export const LOGO = localFont({
  src: [
    {
      path: "../../public/fonts/01001df7-8270-4d44-ad53-85091f1b6725.woff2",
    },
    {
      path: "../../public/fonts/01001df7-8270-4d44-ad53-85091f1b6725.woff2",
    },
  ],
  variable: "--font-logo",
});

export const OGSANS = localFont({
  src: [
    {
      path: "../../public/fonts/SangBleuOGSans-Regular-WebS.woff2",
    },
    {
      path: "../../public/fonts/SangBleuOGSans-Regular-WebS.woff2",
    },
  ],
  variable: "--font-OGSans",
});

export const KINGDOM = localFont({
  src: [
    {
      path: "../../public/fonts/SangBleuKingdom-Regular-WebS.woff2",
    },
    {
      path: "../../public/fonts/SangBleuKingdom-Regular-WebS.woff2",
    },
  ],
  variable: "--font-kingdom",
});
