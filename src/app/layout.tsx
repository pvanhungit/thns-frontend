import { type Metadata, type Viewport } from 'next';

import { primaryFont } from '@/themes';

// ----------------------------------------------------------------------

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={primaryFont.className}>{children}</body>
    </html>
  );
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  icons: [
    ...[192, 512].map((size) => ({
      url: `/favicon/android-chrome-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      rel: 'icon',
    })),
    ...[16, 32].map((size) => ({
      rel: 'icon',
      sizes: `${size}x${size}`,
      url: `/favicon/favicon-${size}x${size}.png`,
    })),
    {
      url: '/favicon/apple-touch-icon.png',
      rel: 'apple-touch-icon',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon/favicon.ico',
    },
  ],
};
