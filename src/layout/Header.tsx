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
  useTheme,
} from '@mui/material';
import Logo from '@/components/logo/Logo';
import useResponsive from '@/hooks/useResponsive';
import { useState } from 'react';
import { IconMenu2 } from '@tabler/icons-react';
import { Link as RouterLink } from 'react-router-dom';
import ThemeModeSwitch from '@/components/theme-mode-switch/ThemeModeSwitch';

type Link = {
  title: string;
  path: string;
  isExternal: boolean;
};

const drawerWidth = 240;

const links: Link[] = [
  {
    title: 'Home',
    path: '/',
    isExternal: false,
  },
  {
    title: 'About',
    path: '/#',
    isExternal: false,
  },
  {
    title: 'Blog',
    path: '/blog',
    isExternal: true,
  },
];

export default function Header() {
  const theme = useTheme();
  const isDesktop = useResponsive('up', 'md');

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Logo />
      <Divider />
      <List>
        {links.map(item => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              component={RouterLink}
              to={item.path}
              target={item.isExternal ? '_parent' : ''}
            >
              <ListItemText primary={item.title} sx={{ textTransform: 'uppercase' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
        <Toolbar>
          <Container
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Logo />
            <Box flexGrow="1" />
            <Box sx={{ mr: { xs: 2, md: 0 } }}>
              <ThemeModeSwitch />
            </Box>
            {isDesktop && (
              <Stack direction="row" spacing={2}>
                {links.map(item => (
                  <Button
                    component={RouterLink}
                    key={item.title}
                    to={item.path}
                    color="secondary"
                    sx={{ textTransform: 'uppercase' }}
                    target={item.isExternal ? '_parent' : ''}
                  >
                    {item.title}
                  </Button>
                ))}
              </Stack>
            )}
            {!isDesktop && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
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
              backgroundColor: theme.palette.common.white,
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
