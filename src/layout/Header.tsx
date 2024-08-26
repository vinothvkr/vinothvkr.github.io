import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  alpha,
  useTheme,
} from '@mui/material';
import Logo from '@/components/logo/Logo';
import { useState } from 'react';
import { IconMenu2 } from '@tabler/icons-react';
import { Link as RouterLink } from 'react-router-dom';
import ThemeModeSwitch from '@/components/theme-mode-switch/ThemeModeSwitch';
import useScreenDetector from '@/hooks/useScreenDetector';
import useOffSetTop from '@/hooks/useOffSetTop';
import { HEADER, URLS } from '@/config';

const drawerWidth = 240;

export default function Header() {
  const theme = useTheme();
  const { isDesktop } = useScreenDetector();
  const isOffset = useOffSetTop();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Logo sx={{ my: 1 }} />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component={RouterLink} to="/">
            <ListItemText primary="Home" sx={{ textTransform: 'uppercase' }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component={RouterLink} to="/">
            <ListItemText primary="About" sx={{ textTransform: 'uppercase' }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} href={URLS.BLOG}>
            <ListItemText primary="Blog" sx={{ textTransform: 'uppercase' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar sx={{ backgroundColor: 'transparent', backgroundImage: 'none', boxShadow: '0' }}>
        <Toolbar
          disableGutters
          sx={{
            height: {
              xs: HEADER.MOBILE,
              md: HEADER.DESKTOP,
            },
            transition: theme.transitions.create(['height', 'background-color'], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.shorter,
            }),
            ...(isOffset && {
              backdropFilter: 'blur(12px)',
              backgroundColor: alpha(theme.palette.background.default, 0.5),
              height: {
                md: HEADER.DESKTOP - 20,
              },
            }),
          }}
        >
          <Container
            maxWidth="xl"
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Logo />
            <Box flexGrow="1" />
            <Box sx={{ mr: { xs: 2, md: 0 } }}>
              <ThemeModeSwitch />
            </Box>
            {isDesktop && (
              <Stack direction="row" spacing={2}>
                <Button
                  color="secondary"
                  sx={{ textTransform: 'uppercase' }}
                  component={RouterLink}
                  to="/"
                >
                  Home
                </Button>
                <Button
                  color="secondary"
                  component={RouterLink}
                  to="/about"
                  sx={{ textTransform: 'uppercase' }}
                >
                  About
                </Button>
                <Button color="secondary" sx={{ textTransform: 'uppercase' }} href={URLS.BLOG}>
                  Blog
                </Button>
              </Stack>
            )}
            {!isDesktop && (
              <IconButton aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
                <IconMenu2 />
              </IconButton>
            )}
          </Container>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': {
              backgroundColor: theme.palette.background.default,
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
