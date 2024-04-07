'use client';

import * as React from 'react';

import Box, { BoxProps } from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import { Icon, IconProps } from '@iconify/react';

// ----------------------------------------------------------------------

export type IconifyProps = Omit<BoxProps, 'height'> & {
  width?: number | string;
  icon: IconProps['icon'];
};

export const Iconify = React.forwardRef<HTMLDivElement, IconifyProps>(
  ({ icon, width = 20, sx, ...other }, ref) => {
    const [hasMounted, setHasMounted] = React.useState(false);

    React.useEffect(() => {
      setHasMounted(true);
    }, []);

    if (!hasMounted) {
      return <Skeleton variant="circular" width={width} height={width} />;
    }

    return (
      <Box
        ref={ref}
        component={Icon}
        className="component-iconify"
        icon={icon}
        sx={{ width, height: width, ...sx }}
        {...other}
      />
    );
  },
);

Iconify.displayName = 'Iconify';
