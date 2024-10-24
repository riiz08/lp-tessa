"use client";

import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import MetaPixel from "@/components/MetaPixel";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <MetaPixel />
      </head>
      <body className={`antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
