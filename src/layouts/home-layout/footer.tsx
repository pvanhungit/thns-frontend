import Link from 'next/link';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Iconify from '@/components/iconify';
import { Logo } from '@/components/logo';

// ----------------------------------------------------------------------

export function HomeFooter() {
  return (
    <Box component="footer" sx={{ position: 'relative', bgcolor: 'background.neutral' }}>
      <Container
        sx={{
          pt: 10,
          pb: 5,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Logo type="full" sx={{ mb: 3 }} />

        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
        >
          <Grid xs={8} md={3}>
            <List
              dense
              sx={{
                maxWidth: 270,
                mx: { xs: 'auto', md: 'unset' },
              }}
            >
              {HIGHLIGHT_FEATURE.map((f, idx) => (
                <ListItem key={`highlight-item-${idx}`}>
                  <Iconify color="primary.main" icon={f.icon} sx={{ mr: 1 }} />
                  <ListItemText
                    primary={f.name}
                    primaryTypographyProps={{ variant: 'subtitle2' }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }}>
              {FOOTER_LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                  sx={{ width: 1 }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <MuiLink
                      key={link.name}
                      component={Link}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </MuiLink>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 10 }}>
          © 2024. All rights reserved
        </Typography>
      </Container>
    </Box>
  );
}

const FOOTER_LINKS = [
  {
    headline: 'Giới thiệu',
    children: [
      { name: 'Về chúng tôi', href: '#' },
      { name: 'Tư vấn mua hàng', href: '#' },
      { name: 'Tuyển dụng', href: '#' },
    ],
  },
  {
    headline: 'Chính sách chúng',
    children: [
      { name: 'Chính sách trả góp', href: '#' },
      { name: 'Chính sách bảo mật', href: '#' },
      { name: 'Chính sách bảo hành', href: '#' },
      { name: 'Chính sách đổi - trả hàng', href: '#' },
    ],
  },
  {
    headline: 'Hỗ trợ khách hàng',
    children: [
      { name: 'Đường dây nóng', href: '#' },
      { name: 'Thông tin thanh toán', href: '#' },
      { name: 'Tra cứu bảo hành', href: '#' },
    ],
  },
];

const HIGHLIGHT_FEATURE = [
  {
    name: 'Chính sách giao hàng linh hoạt',
    icon: 'carbon:delivery',
  },
  {
    name: 'Đổi trả dễ dàng',
    icon: 'carbon:ibm-data-product-exchange',
  },
  {
    name: 'Thanh toán tiện lợi',
    icon: 'material-symbols-light:payments-outline-rounded',
  },
  {
    name: 'Hỗ trợ nhiệt tình',
    icon: 'mdi:support',
  },
];
