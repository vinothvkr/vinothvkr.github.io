import { Box, useTheme } from '@mui/material';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { m, useScroll, useSpring } from 'framer-motion';
import Footer from './Footer';

export default function Layout() {
  const theme = useTheme();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    restSpeed: 0.001,
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <m.div
        style={{
          left: 0,
          position: 'fixed',
          width: '100%',
          height: 5,
          background: theme.palette.primary.main,
          scaleX,
          transformOrigin: '0% 0%',
          zIndex: 1999,
        }}
      />

      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: { xs: 8, md: 11 },
        }}
      >
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}
