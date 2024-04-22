import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import {
  HEADER_DESKTOP_HEIGHT,
  HEADER_MOBILE_HEIGHT,
  HomeFabs,
  HomeFooter,
  HomeHeader,
  ShowroomList,
} from '@/layouts/home-layout';

// -----------------------------------------------------------------------------

export default function HomeLayout({ children }: React.PropsWithChildren) {
  return (
    <Stack direction="column">
      <Container sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
        <HomeHeader />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            pt: {
              xs: `${HEADER_MOBILE_HEIGHT + 10}px`,
              md: `${HEADER_DESKTOP_HEIGHT + 24}px`,
            },
          }}
        >
          {children}
        </Box>
      </Container>

      <Stack direction="column" rowGap={5}>
        <ShowroomList />
        <HomeFooter />
      </Stack>

      <HomeFabs />
    </Stack>
  );
}
