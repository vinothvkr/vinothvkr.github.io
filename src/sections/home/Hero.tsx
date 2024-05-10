import HeroImage from '@/assets/HeroImage';
import useScreenDetector from '@/hooks/useScreenDetector';
import { Box, Container, Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { IconBrandBlogger, IconBrandGithub, IconBrandX, IconMail } from '@tabler/icons-react';

export default function Hero() {
  const { isDesktop } = useScreenDetector();
  return (
    <Container maxWidth="xl" sx={{ height: '100vh' }}>
      <Grid container spacing={10} sx={{ height: 1 }}>
        <Grid item xs={12} md={6} sx={{ height: 1 }}>
          <Box alignContent="center" sx={{ height: 1 }}>
            <Stack>
              <Typography variant="h3" component="h1">
                Vinoth Kumar Rajendran
              </Typography>
              <Typography variant="h5" component="h2">
                Senior Software Engineer
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent={{ xs: 'center', md: 'inherit' }}>
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
          </Box>
        </Grid>
        <Grid item md={6}>
          <HeroImage alignContent="center" sx={{ height: 1 }} />
        </Grid>
      </Grid>
      <Stack
        sx={{ height: 'inherit' }}
        justifyContent="center"
        alignItems="center"
        spacing={3}
        direction="row"
      >
        <Box textAlign={{ xs: 'center', md: 'inherit' }}>
          {/* <Avatar
              alt="Vinoth Kumar Rajendran"
              src="/avatar.jpg"
              sx={{ width: 200, height: 200 }}
            /> */}
        </Box>
        {isDesktop && <Box></Box>}
      </Stack>
    </Container>
  );
}
