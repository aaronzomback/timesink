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
      path: "../../public/fonts/af5352dc-274e-4518-872a-3c94487ba2da.woff",
    },
    {
      path: "../../public/fonts/01001df7-8270-4d44-ad53-85091f1b6725.woff2",
    },
  ],
  variable: "--font-logo",
});

export const LOGO_ITALIC = localFont({
  src: [
    {
      path: "../../public/fonts/19ffb4ec-02fc-4a18-a35f-c5008e5e5680.woff",
    },
    {
      path: "../../public/fonts/3344aef7-9436-4a94-ac89-8f67d9914a20.woff2",
    },
  ],
  variable: "--font-logo_italic",
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
