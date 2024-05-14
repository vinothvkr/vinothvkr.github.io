import { Box, Button, Container, Stack, Typography, useTheme } from '@mui/material';
import { IconBrandGithub, IconBrandX, IconMail } from '@tabler/icons-react';

export default function HomeContact() {
  const theme = useTheme();
  return (
    <Container id="contact" maxWidth="xl">
      <Box mt="6rem">
        <Typography fontWeight="500" textAlign="center" variant="h3">
          Contact me
        </Typography>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'center' }}
          justifyContent={{ md: 'center' }}
          mt={5}
          spacing={2}
        >
          <Button variant="contained" startIcon={<IconMail />} href="mailto:vinothvkr@hotmail.com">
            E-mail
          </Button>
          <Button
            variant="contained"
            startIcon={<IconBrandGithub />}
            href="https://github.com/vinothvkr"
            target="_blank"
            sx={{ backgroundColor: theme.palette.grey[800] }}
          >
            Github
          </Button>
          <Button
            variant="contained"
            startIcon={<IconBrandX />}
            href="https://twitter.com/_vinothvkr"
            target="_blank"
            sx={{ backgroundColor: theme.palette.grey[800] }}
          >
            Twitter
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
