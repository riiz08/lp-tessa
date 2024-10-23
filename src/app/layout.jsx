"use client";

import { useEffect } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("init", "1641971290058186"); // Ganti dengan Pixel ID-mu
      window.fbq("track", "PageView");
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <Script
          id="meta-pixel"
          strategy="beforeInteractive" // Muat sebelum interaksi pengguna
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1641971290058186');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className={`antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
