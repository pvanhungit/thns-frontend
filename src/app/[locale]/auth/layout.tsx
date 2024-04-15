import AuthLayout from '@/layouts/auth-layout';

// ----------------------------------------------------------------------

export default function Layout({ children }: React.PropsWithChildren) {
  return <AuthLayout>{children}</AuthLayout>;
}
