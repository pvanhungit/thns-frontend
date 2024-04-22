'use client';

import * as React from 'react';

import Box from '@mui/material/Box';

import { Header, Main, Nav } from '@/layouts/dashboard-layout';

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main>{children}</Main>
      </Box>
    </>
  );
}
