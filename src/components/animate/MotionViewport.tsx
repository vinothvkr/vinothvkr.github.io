import { type ReactNode } from 'react';
import { m, type MotionProps } from 'framer-motion';
import { Box, BoxProps } from '@mui/material';
import { varContainer } from './variants/container';

type IProps = BoxProps & MotionProps;

interface Props extends IProps {
  children: ReactNode;
  disableAnimatedMobile?: boolean;
}

export default function MotionViewport({
  children,
  disableAnimatedMobile = false,
  ...other
}: Props) {
  if (disableAnimatedMobile) {
    return <Box {...other}>{children}</Box>;
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
}
