import HomeLayout from '@/layouts/home-layout';

// ----------------------------------------------------------------------

export default function Layout({ children }: React.PropsWithChildren) {
  return <HomeLayout>{children}</HomeLayout>;
}
