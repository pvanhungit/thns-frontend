'use client';

import * as React from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { alpha } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useResponsive } from '@/hooks';

import Logo from '@/components/logo';
import Scrollbar from '@/components/scrollbar';

import { mockUser } from '@/_mock/user';

import { NAV } from './config-layout';
import navConfig, { type NavConfigItem } from './config-navigation';

// ----------------------------------------------------------------------

export type NavProps = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function Nav({ openNav, onCloseNav }: NavProps) {
  const pathname = usePathname();

  const upLg = useResponsive('up', 'lg');

  React.useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const content = React.useMemo(() => <NavContent />, []);

  return (
    <Box sx={{ flexShrink: { lg: 0 }, width: { lg: NAV.WIDTH } }}>
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {content}
        </Box>
      ) : (
        <Drawer open={openNav} onClose={onCloseNav} PaperProps={{ sx: { width: NAV.WIDTH } }}>
          {content}
        </Drawer>
      )}
    </Box>
  );
}

// ----------------------------------------------------------------------

function NavContent() {
  return (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Logo sx={{ mt: 3, ml: 4 }} />

      <Box
        sx={{
          my: 3,
          mx: 2.5,
          py: 2,
          px: 2.5,
          display: 'flex',
          borderRadius: 1.5,
          alignItems: 'center',
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
        }}
      >
        <Avatar src={mockUser?.avatar} alt="photoURL" />

        <Box sx={{ ml: 2 }}>
          <Typography variant="subtitle2">{mockUser.name}</Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {mockUser.role}
          </Typography>
        </Box>
      </Box>

      <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </Stack>
    </Scrollbar>
  );
}

// ----------------------------------------------------------------------

function NavItem({ item }: { item: NavConfigItem }) {
  const pathname = usePathname();
  const active = pathname.includes(item.path);

  return (
    <ListItemButton
      component={NextLink}
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: 'body2',
        color: 'text.secondary',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        ...(active && {
          color: 'primary.main',
          fontWeight: 'fontWeightSemiBold',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title} </Box>
    </ListItemButton>
  );
}
