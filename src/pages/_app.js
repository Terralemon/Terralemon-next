import { useEffect } from 'react';
import Head from 'next/head';
import '../css/terralemon.css';
import '../css/terralemon-responsive-new.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Bootstrap importeren aan client-side
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Terralemon - Digital Agency Amsterdam" />
        <meta name="keywords" content="terralemon, digital agency, amsterdam, webdesign, website, app development" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <title>Terralemon - Digital Agency Amsterdam</title>
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        :root {
          --tl-green: #92D400;
          --tl-dark-green: #648c11;
          --tl-light-green: #CBEA68;
          --tl-black: #0F0F0F;
          --tl-dark-gray: #222222;
          --tl-gray: #747474;
          --tl-light-gray: #F2F2F2;
          --tl-white: #FFFFFF;
        }
        
        body {
          font-family: 'Montserrat', sans-serif;
          color: var(--tl-black);
          background-color: var(--tl-white);
          overflow-x: hidden;
        }
        
        .tl-bg-green {
          background-color: var(--tl-green);
        }
        
        .tl-text-green {
          color: var(--tl-green);
        }
        
        .tl-bg-black {
          background-color: var(--tl-black);
        }
        
        .tl-btn {
          display: inline-block;
          padding: 12px 24px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .tl-btn-primary {
          background-color: var(--tl-green);
          color: var(--tl-black);
        }
        
        .tl-btn-primary:hover {
          background-color: var(--tl-dark-green);
          color: var(--tl-white);
        }
        
        .tl-btn-secondary {
          background-color: var(--tl-black);
          color: var(--tl-white);
        }
        
        .tl-btn-secondary:hover {
          background-color: var(--tl-dark-gray);
        }
        
        .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
        }
        
        @media (min-width: 768px) {
          .section-title {
            font-size: 2.5rem;
          }
        }
        
        .card-hover {
          transition: transform 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
        }
        
        .footer-container {
          padding-top: 60px;
          padding-bottom: 30px;
        }
      `}</style>
    </>
  );
}

export default MyApp; 