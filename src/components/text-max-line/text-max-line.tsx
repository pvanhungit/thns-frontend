import * as React from 'react';

import { Variant } from '@mui/material/styles/createTypography';
import Link, { LinkProps } from '@mui/material/Link';
import Typography, { TypographyProps } from '@mui/material/Typography';

import useTypography from './use-typography';

// ----------------------------------------------------------------------

export type TextMaxLineProps = TypographyProps &
  LinkProps & {
    line?: number;
    asLink?: boolean;
    persistent?: boolean;
    children: React.ReactNode;
    variant?: Variant;
  };

const TextMaxLine = React.forwardRef<HTMLAnchorElement, TextMaxLineProps>(
  ({ asLink, variant = 'body1', line = 2, persistent = false, children, sx, ...other }, ref) => {
    const { lineHeight } = useTypography(variant);

    const styles = {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: line,
      WebkitBoxOrient: 'vertical',
      ...(persistent && {
        height: lineHeight * line,
      }),
      ...sx,
    } as const;

    if (asLink) {
      return (
        <Link color="inherit" ref={ref} variant={variant} sx={{ ...styles }} {...other}>
          {children}
        </Link>
      );
    }

    return (
      <Typography ref={ref} variant={variant} sx={{ ...styles }} {...other}>
        {children}
      </Typography>
    );
  },
);

export default TextMaxLine;
