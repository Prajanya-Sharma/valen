import { Metadata } from 'next';
import { Playwrite_IN } from 'next/font/google';
import './globals.css';

// Load the font (without subsets since it's not supported)
const playwrite = Playwrite_IN({ weight: ['100', '400'] });

export const metadata: Metadata = {
  title: 'Will You Be My Valentine?',
  description: 'A special website to ask my girlfriend to be my Valentine.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playwrite.className}>{children}</body>
    </html>
  );
}
