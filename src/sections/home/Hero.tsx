import { Avatar, Box, Container, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { IconBrandBlogger, IconBrandGithub, IconBrandX, IconMail } from '@tabler/icons-react';

export default function Hero() {
  return (
    <Box sx={{ height: '100vh' }}>
      <Container sx={{ height: 'inherit' }}>
        <Stack sx={{ height: 'inherit' }} justifyContent="center" alignItems="center" spacing={3}>
          <Avatar alt="Vinoth Kumar Rajendran" src="/avatar.jpg" sx={{ width: 200, height: 200 }} />
          <Stack alignItems="center">
            <Typography variant="h3" component="h1" color="#1A2027" textAlign="center">
              Vinoth Kumar Rajendran
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              color="#1A2027"
              textAlign="center"
              sx={{ mt: 0 }}
            >
              Senior Software Engineer
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Tooltip title="Email">
              <IconButton href="mailto:vinothvkr@hotmail.com">
                <IconMail />
              </IconButton>
            </Tooltip>
            <Tooltip title="Blog">
              <IconButton href="https://vinothvkr.com/blog" target="_blank">
                <IconBrandBlogger />
              </IconButton>
            </Tooltip>
            <Tooltip title="Github">
              <IconButton href="https://github.com/vinothvkr" target="_blank">
                <IconBrandGithub />
              </IconButton>
            </Tooltip>
            <Tooltip title="Twitter">
              <IconButton href="https://twitter.com/_vinothvkr" target="_blank">
                <IconBrandX />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
