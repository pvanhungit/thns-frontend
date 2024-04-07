import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';

import { useResponsive } from '@/hooks';

import { bgBlur } from '@/themes/css';
import Iconify from '@/components/iconify';
import LanguagePopover from '@/components/language-popover';

import AccountPopover from './common/account-popover';
import Searchbar from './common/searchbar';
import { HEADER, NAV } from './config-layout';

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }: { onOpenNav: VoidFunction }) {
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');

  return (
    <AppBar
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        <>
          {!lgUp && (
            <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
              <Iconify icon="eva:menu-2-fill" />
            </IconButton>
          )}

          <Searchbar />

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" alignItems="center" spacing={1}>
            <LanguagePopover />
            <AccountPopover />
          </Stack>
        </>
      </Toolbar>
    </AppBar>
  );
}
