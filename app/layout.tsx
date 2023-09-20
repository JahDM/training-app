import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from './context/AuthContext';
import ToasterContext from './context/ToasterContext';
import { ReactQueryProvider } from './ReactQueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang='en'>
        <body className={inter.className}>
          <Provider session={undefined}>
            <ToasterContext />
            {children}
          </Provider>
        </body>
      </html>
    </ReactQueryProvider>
  );
}