import { AppBar, Box, Button, Container, Link, Stack, Toolbar } from '@mui/material';
import Logo from '../components/logo/Logo';

const links = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/#',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];

export default function Header() {
  return (
    <AppBar sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
      <Toolbar>
        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo />
          <Box flexGrow="1" />
          <Stack direction="row" spacing={2}>
            {links.map(link => (
              <Button
                LinkComponent={Link}
                key={link.title}
                href={link.path}
                color="secondary"
                sx={{ textTransform: 'uppercase' }}
              >
                {link.title}
              </Button>
            ))}
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
