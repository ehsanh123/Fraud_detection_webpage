'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    VANTA?: any;
    edit_page?: { Event: { subscribe: (event: string, callback: () => void) => void } };
  }
}

const VantaGlobe = () => {
  useEffect(() => {
    const setVanta = () => {
      if (window.VANTA) {
        window.VANTA.GLOBE({
          el: ".s-page-1 .s-section-1 .s-section",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
        });
      }
    };

    setVanta();
    if (window.edit_page?.Event) {
      window.edit_page.Event.subscribe("Page.beforeNewOneFadeIn", setVanta);
    }
  }, []);

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js" strategy="beforeInteractive" />
      <div className="s-page-1 s-section-1 s-section" />
    </>
  );
};

export default VantaGlobe;
