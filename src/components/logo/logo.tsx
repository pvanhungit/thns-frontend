'use client';

import * as React from 'react';
import NextLink from 'next/link';

import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import Link from '@mui/material/Link';

// ----------------------------------------------------------------------

export type LogoProps = Omit<BoxProps, 'children'> & {
  disabledLink?: boolean;
  type?: 'full' | 'mini';
};

export const Logo = React.forwardRef<HTMLElement, LogoProps>(
  ({ disabledLink = false, type = 'mini', sx, ...otherProps }, ref) => {
    const theme = useTheme();

    const PRIMARY_LIGHT = theme.palette.primary.light;
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          width: type === 'mini' ? 40 : 120,
          height: 40,
          display: 'inline-flex',
          ...sx,
        }}
        {...otherProps}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox={type === 'mini' ? '0 0 512 512' : '0 0 1536 512'}
        >
          <defs>
            <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
              <stop offset="0%" stopColor={PRIMARY_DARK} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>

            <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor={PRIMARY_LIGHT} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>

            <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor={PRIMARY_LIGHT} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>
          </defs>

          {type === 'mini' ? (
            <g fillRule="evenodd" stroke="none" strokeWidth="1">
              <path
                fill="url(#BG1)"
                d="M146.61,151.77h-59.22v82.23H0V0h87.39v78.22h59.22V0h87.39v234h-87.39v-82.23Z"
              />
              <path
                fill="url(#BG1)"
                d="M351.31,73.21h-73.31V0h234v73.21h-73.31v160.79h-87.39V73.21Z"
              />
              <path
                fill="url(#BG1)"
                d="M0,278h121.88c68.62,0,112.12,35.1,112.12,90.26s-43.5,89.92-111.37,89.92h-31.88v53.82H0v-234ZM109.88,395c21.37,0,33.37-9.69,33.37-26.07s-12-26.07-33.37-26.07h-21v52.15h21Z"
              />
              <path
                fill="url(#BG1)"
                d="M278,278h81.01v78.56h7.03c19.75,0,26.11-4.01,31.8-21.73l19.08-56.83h87.04l-33.81,90.26c-4.69,12.03-9.71,22.06-15.73,30.42l57.58,113.32h-92.39l-38.83-83.24h-21.76v83.24h-81.01v-234Z"
              />
            </g>
          ) : (
            <g fillRule="evenodd" stroke="none" strokeWidth="1">
              <path
                fill="url(#BG1)"
                d="M208.55,233.21h-84.24v126.36H0V0h124.31v120.2h84.24V0h124.31v359.57h-124.31v-126.36Z"
              />
              <path
                fill="url(#BG1)"
                d="M500.7,112.49h-104.28V0h332.86v112.49h-104.28v247.08h-124.31V112.49Z"
              />
              <path
                fill="url(#BG1)"
                d="M792.85,152.43h166.94c94,0,153.59,53.94,153.59,138.69s-59.59,138.18-152.56,138.18h-43.66v82.7h-124.31V152.43ZM943.35,332.21c29.28,0,45.72-14.9,45.72-40.07s-16.44-40.07-45.72-40.07h-28.77v80.13h28.77Z"
              />
              <path
                fill="url(#BG1)"
                d="M1176.94,152.43h124.31v120.71h10.79c30.31,0,40.07-6.16,48.8-33.39l29.28-87.32h133.55l-51.88,138.69c-7.19,18.49-14.9,33.9-24.14,46.74l88.35,174.13h-141.77l-59.59-127.91h-33.39v127.91h-124.31V152.43Z"
              />
              <rect fill="url(#BG3)" y="452.19" width="729.28" height="59.81" />
              <rect fill="url(#BG2)" x="792.85" width="743.15" height="59.81" />
            </g>
          )}
        </svg>
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={NextLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  },
);

Logo.displayName = 'Logo';
