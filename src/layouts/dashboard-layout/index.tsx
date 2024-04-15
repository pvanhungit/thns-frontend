'use client';

import * as React from 'react';

import Box from '@mui/material/Box';

import Header from './header';
import Main from './main';
import Nav from './nav';

// ----------------------------------------------------------------------

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
