import type { Metadata } from 'next';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import { I18nProviderClient } from '@/locales/client';

import { ThemeProvider } from '@/themes';
import { ToastContainer } from '@/components/toastify';

import { GoogleOAuthProvider } from '@/modules/auth/client';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

type RootLayoutProps = React.PropsWithChildren<{
  params: { locale: string };
}>;

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  return (
    <I18nProviderClient locale={locale ?? 'en'}>
      <AppRouterCacheProvider options={{ key: 'css' }}>
        <ThemeProvider>
          <GoogleOAuthProvider>{children}</GoogleOAuthProvider>

          <ToastContainer />
        </ThemeProvider>
      </AppRouterCacheProvider>
    </I18nProviderClient>
  );
}
