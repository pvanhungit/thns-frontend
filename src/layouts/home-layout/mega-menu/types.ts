import { SxProps, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

type Products = {
  name: string;
  coverUrl: string;
  path: string;
};

type Tags = {
  name: string;
  path: string;
};

export type MenuCarouselProps = {
  products: Products[];
  numberShow?: number;
  sx?: SxProps<Theme>;
};

export type MenuHotProductsProps = {
  tags: Tags[];
};

export type ParentItemProps = {
  title: string;
  path?: string;
  icon?: React.ReactElement;
  open?: boolean;
  hasSub?: boolean;
  onClick?: VoidFunction;
  onMouseEnter?: VoidFunction;
  onMouseLeave?: VoidFunction;
  component?: React.ReactNode;
  to?: string;
};

export type MegaMenuItemProps = {
  title: string;
  path: string;
  icon: React.ReactElement;
  children?: {
    subheader: string;
    items: {
      title: string;
      path: string;
    }[];
  }[];
};
