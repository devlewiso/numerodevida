import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script'; // Importamos Script de Next.js

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Calculadora de Número de Vida',
  description: 'Calcula tu número de vida basado en tu fecha de nacimiento.',
  openGraph: {
    title: 'Calculadora de Número de Vida',
    description: 'Calcula tu número de vida basado en tu fecha de nacimiento.',
    url: 'https://numerodevida.netlify.app/',
    siteName: 'Calculadora de Número de Vida',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Número de Vida',
    description: 'Calcula tu número de vida basado en tu fecha de nacimiento.',
    site: '@tu_usuario',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PP5M0L664Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PP5M0L664Z');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "nw7ch090jo");
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
