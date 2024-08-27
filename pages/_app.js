import '../public/assets/css/style.css';
import '../public/assets/css/modal.css';
import '../public/assets/css/swiper-custom.css';
import React, { useEffect, useState } from 'react';
import Preloader from '../components/elements/Preloader';
import { CroctProvider } from '@croct/plug-react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import '../styles/homebanner.css';
import '../styles/logos.css';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (typeof window !== 'undefined') {
      window.WOW = require('wowjs');
    }

    new WOW.WOW().init();
  }, []);

  return (
    <>
      {!loading ? (
        <CroctProvider appId="4ed980d9-5f81-4c0e-b9c9-f98edf2d03e3">
          <Component {...pageProps} />
        </CroctProvider>
      ) : (
        <Preloader />
      )}
       <Analytics />
    </>
  );
}

export default MyApp;
