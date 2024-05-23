import { Box, Container, Link, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        py: 5,
        mt: 5,
      }}
    >
      <Container>
        <Typography component="div">
          Made with ❤️ by <Link href="https://github.com/vinothvkr">@Vinoth Kumar Rajendran</Link>
        </Typography>
      </Container>
    </Box>
  );
}
