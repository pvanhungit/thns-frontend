'use client';

import * as React from 'react';

import Box from '@mui/material/Box';

import { useResponsive } from '@/hooks';

import { DashboardHeader, DashboardNav, HEADER, NAV } from '@/layouts/dashboard-layout';

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  const lgUp = useResponsive('up', 'lg');
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <>
      <DashboardHeader onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <DashboardNav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            minHeight: 1,
            display: 'flex',
            flexDirection: 'column',
            py: `${HEADER.H_MOBILE + 8}px`,
            ...(lgUp && {
              px: 2,
              py: `${HEADER.H_DESKTOP + 8}px`,
              width: `calc(100% - ${NAV.WIDTH}px)`,
            }),
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
