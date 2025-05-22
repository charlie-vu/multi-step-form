import "@/styles/globals.scss";
import { Suspense } from "react";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
  title: "Frontend Mentor | Multi-step form",
  description: "FE Mentor Challenge",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          {children}
        </Suspense>

        <GoogleAnalytics gaId="G-TLP64G8M41" />
      </body>
    </html>
  );
}
