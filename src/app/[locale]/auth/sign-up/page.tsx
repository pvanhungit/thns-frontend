import Link from 'next/link';

import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { getScopedI18n } from '@/locales/server';

import { GoogleLoginButton } from '@/modules/auth/client/components';

import SignUpForm from './sign-up-form';

// ----------------------------------------------------------------------

export default async function SignUpPage() {
  const t = await getScopedI18n('auth');
  return (
    <Card sx={{ p: 5, width: 1, maxWidth: 420 }}>
      <Typography variant="h4">Get started absolutely free</Typography>
      <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
        Already have an account?
        <MuiLink variant="subtitle2" sx={{ ml: 0.5 }} component={Link} href="/auth/sign-in">
          Sign in
        </MuiLink>
      </Typography>
      <GoogleLoginButton />
      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {t('or')}
        </Typography>
      </Divider>
      <SignUpForm />
    </Card>
  );
}
