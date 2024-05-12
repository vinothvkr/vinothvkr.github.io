import HeroImage from '@/assets/HeroImage';
import useScreenDetector from '@/hooks/useScreenDetector';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { IconBrandBlogger, IconBrandGithub, IconBrandX } from '@tabler/icons-react';
import { HashLink } from 'react-router-hash-link';

export default function HomeHero() {
  const { isDesktop } = useScreenDetector();
  const theme = useTheme();
  return (
    <Container maxWidth="xl" sx={{ height: '100vh' }}>
      <Grid container spacing={10} sx={{ height: 1 }}>
        <Grid item xs={12} md={6} sx={{ height: 1 }}>
          <Box alignContent="center" sx={{ height: 1 }}>
            <Stack spacing={3}>
              <Stack spacing={3}>
                <Typography
                  variant="h1"
                  fontWeight="600"
                  fontSize={{ xs: 64, md: '5rem' }}
                  component="h1"
                  textAlign={{ xs: 'center', md: 'inherit' }}
                >
                  Vinoth Kumar Rajendran
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  textAlign={{ xs: 'center', md: 'inherit' }}
                  color={theme.palette.primary.main}
                >
                  Senior Software Engineer
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent={{ xs: 'center', md: 'inherit' }}>
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
              <Box
                justifyContent={{ xs: 'center', md: 'inherit' }}
                textAlign={{ xs: 'center', md: 'inherit' }}
              >
                <Button variant="contained" size="large" component={HashLink} to="#contact" smooth>
                  Contact
                </Button>
              </Box>
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
