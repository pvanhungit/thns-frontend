import { type Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const MuiCard = (theme: Theme): Theme['components'] => ({
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow: theme.customShadows.card,
        borderRadius: Number(theme.shape.borderRadius) * 2,
        position: 'relative',
        zIndex: 0, // Fix Safari overflow: hidden with border radius
      },
    },
  },
  MuiCardHeader: {
    defaultProps: {
      titleTypographyProps: { variant: 'h6' },
      subheaderTypographyProps: { variant: 'body2' },
    },
    styleOverrides: {
      root: {
        padding: theme.spacing(3, 3, 0),
      },
    },
  },
});
