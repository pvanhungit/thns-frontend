'use client';

import Link from 'next/link';

import { useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import { FACEBOOK_URL, YOUTUBE_URL } from '@/constants/site-info';

import Iconify from '@/components/iconify';

// ----------------------------------------------------------------------

export function HomeFabs() {
  const theme = useTheme();

  const handleScrollToTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Stack
      sx={{
        position: 'fixed',
        right: 5,
        bottom: 30,
        [theme.breakpoints.up('md')]: {
          right: 30,
        },
      }}
      direction="column"
    >
      <IconButton>
        <Link href={FACEBOOK_URL} target="_blank">
          <Iconify icon="logos:facebook" width={32} />
        </Link>
      </IconButton>
      <IconButton>
        <Link href={YOUTUBE_URL} target="_blank">
          <Iconify icon="logos:youtube-icon" width={32} />
        </Link>
      </IconButton>
      <IconButton onClick={handleScrollToTop}>
        <Iconify icon="fa6-solid:circle-up" color="primary.main" width={32} />
      </IconButton>
    </Stack>
  );
}
