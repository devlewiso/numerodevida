import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Calculadora de Número de Vida',
  description: 'Calcula tu número de vida basado en tu fecha de nacimiento.',
  openGraph: {
    title: 'Calculadora de Número de Vida',
    description: 'Calcula tu número de vida basado en tu fecha de nacimiento.',
    url: 'https://tusitio.com',
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
      <body className={inter.className}>
        {children}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "nw7ch090jo");
            `,
          }}
        />
      </body>
    </html>
  );
}
