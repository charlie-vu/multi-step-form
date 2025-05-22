import "@/styles/globals.scss";
import { Suspense } from "react";

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
      </body>
    </html>
  );
}
