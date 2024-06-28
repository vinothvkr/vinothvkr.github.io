import NotFoundImage from '@/assets/NotFoundImage';
import { Button, Container, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container maxWidth="xl" sx={{ height: '100vh' }}>
      <Stack height="1" direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <NotFoundImage width="600px" />
        <Typography variant="h2" fontWeight={500}>
          Oops!
        </Typography>
        <Typography variant="h5">We can't seem to find the page you're looking for.</Typography>
        <Button variant="contained" sx={{ textTransform: 'none' }} component={RouterLink} to="/">
          Goto Home
        </Button>
      </Stack>
    </Container>
  );
}
