'use server';

import Link from 'next/link';

import { type SxProps, type Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { LIST_SHOWROOM } from '@/constants/site-info';
import { getI18n } from '@/locales/server';

import Iconify from '@/components/iconify';

// ----------------------------------------------------------------------

export async function ShowroomList() {
  const t = await getI18n();

  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: 2, py: 5 }}
    >
      <Typography variant="h4" textAlign="center" textTransform="uppercase">
        Hệ thống showroom
      </Typography>

      <Divider sx={{ width: 150, borderColor: 'common.black', borderWidth: 1 }} />

      <Grid container sx={{ width: '100%' }}>
        {LIST_SHOWROOM.map((sr, idx) => (
          <Grid item md={3} sm={6} key={`footer-show-row-${idx}`}>
            <Stack direction="column" rowGap={1} sx={{ p: 2 }}>
              <Stack direction="row" justifyContent="center" alignItems="stretch">
                <Box
                  sx={{
                    bgcolor: 'grey',
                    borderTopLeftRadius: 3,
                    borderBottomLeftRadius: 3,
                    alignItems: 'center',
                    display: 'flex',
                    p: 0.75,
                  }}
                >
                  <Iconify icon="mingcute:star-fill" color="common.white" />
                </Box>

                <Box
                  sx={{
                    flexGrow: 1,
                    bgcolor: 'primary.main',
                    borderTopRightRadius: 3,
                    borderBottomRightRadius: 3,
                    alignItems: 'center',
                    display: 'flex',
                    pl: 1,
                  }}
                >
                  <Typography variant="subtitle1" color="common.white">
                    {sr.name}
                  </Typography>
                </Box>
              </Stack>

              <InfoText
                text={sr.address}
                icon="mingcute:map-pin-fill"
                href="#"
                sx={{ fontWeight: 600 }}
              />
              <InfoText
                text={`${t('footer.buy')} ${sr.buy.phone}`}
                icon="line-md:phone-call-loop"
                href={`tel:${sr.buy.phone}`}
              />
              <InfoText
                text={`${t('footer.warranty')} ${sr.warranty.phone}`}
                icon="line-md:phone-call-loop"
                href="#"
              />
              <InfoText text={sr.workingDay} icon="svg-spinners:clock" href="#" />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function InfoText({
  icon,
  text,
  href,
  sx,
}: {
  icon: string;
  text: string;
  href?: string;
  sx?: SxProps<Theme>;
}) {
  const props: MuiLinkProps = {};
  if (href && href !== '#') {
    props.href = href;
    props.target = '_blank';
    props.component = Link;
  } else {
    props.component = 'p';
    props.underline = 'none';
  }

  return (
    <MuiLink
      variant="subtitle2"
      display="flex"
      justifyContent="start"
      alignItems="center"
      color="common.black"
      sx={{ fontWeight: 400, ...sx }}
      {...props}
    >
      <Iconify icon={icon} sx={{ mr: 1 }} />
      {text}
    </MuiLink>
  );
}
