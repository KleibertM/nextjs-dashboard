import { monserrat } from './ui/font';
import { Metadata } from 'next';
import './ui/global.css';


export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialiased`}>
        
        {children}

        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
