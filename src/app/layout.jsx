import "@/styles/globals.scss";

export const metadata = {
  title: "Multi-step Form",
  description: "FE Mentor Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
