"use client";

import Script from "next/script";
import { useEffect } from "react";

const MetaPixel = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.fbq =
        window.fbq ||
        function () {
          window.fbq.callMethod
            ? window.fbq.callMethod
            : window.fbq.queue.push(arguments);
        };
      window.fbq("init", "1641971290058186");
      window.fbq("track", "PageView");
    }
  }, []);

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        src="https://connect.facebook.net/en_US/fbevents.js"
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1641971290058186&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  );
};

export default MetaPixel;