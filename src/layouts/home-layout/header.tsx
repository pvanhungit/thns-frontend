'use client';

import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';

import { useOffSetTop } from '@/hooks';
import { useI18n } from '@/locales/client';

import { bgBlur } from '@/themes/css';
import Iconify from '@/components/iconify';
import Logo from '@/components/logo';
import ResponsiveHidden from '@/components/responsive-hidden';

import { HEADER_DESKTOP_HEIGHT, HEADER_DESKTOP_OFFSET, HEADER_MOBILE_HEIGHT } from './config';

// ----------------------------------------------------------------------

export function HomeHeader() {
  const t = useI18n();
  const theme = useTheme();

  const offsetTop = useOffSetTop(HEADER_DESKTOP_HEIGHT / 2);

  return (
    <AppBar color="transparent" sx={{ boxShadow: 'none' }}>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER_MOBILE_HEIGHT,
            md: HEADER_DESKTOP_HEIGHT,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({ color: theme.palette.background.default }),
            height: { md: HEADER_DESKTOP_OFFSET },
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            columnGap: 5,
          }}
        >
          <Logo type="full" sx={{ height: 30, width: 'auto' }} />

          <Stack
            direction="row"
            alignItems="stretch"
            justifyContent="center"
            sx={{ flex: 1, height: 'auto' }}
          >
            <TextField
              size="small"
              sx={{ flex: 1, maxWidth: 400, mr: -2 }}
              InputProps={{
                sx: {
                  backgroundColor: `${theme.palette.primary.lighter}60`,
                },
              }}
              placeholder={t('header.what_are_you_looking_for')}
            />

            <ResponsiveHidden query="down" start="md">
              <Button variant="contained" startIcon={<Iconify icon="mingcute:search-2-fill" />}>
                {t('actions.search')}
              </Button>
            </ResponsiveHidden>
            <ResponsiveHidden query="up" start="md">
              <IconButton>
                <Iconify icon="mingcute:search-2-fill" />
              </IconButton>
            </ResponsiveHidden>
          </Stack>

          <Button
            startIcon={
              <Badge badgeContent={1} color="primary" variant="standard">
                <Iconify icon="mingcute:shopping-cart-2-fill" width={30} />
              </Badge>
            }
          >
            Cart
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
