import { TypographyOptions } from '@mui/material/styles/createTypography';

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

const FONT_FAMILY = 'Public Sans, sans-serif';

const typography: TypographyOptions = {
  fontFamily: FONT_FAMILY,
  button: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
};

export default typography;
