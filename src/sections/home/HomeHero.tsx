import HeroImage from '@/assets/Home/HeroImage';
import { URLS } from '@/config';
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
import Reveal from 'react-awesome-reveal';
import { HashLink } from 'react-router-hash-link';
import { keyframes } from '@emotion/react';

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default function HomeHero() {
  const theme = useTheme();

  return (
    <Container maxWidth="xl" sx={{ height: '100vh' }}>
      <Box component={Reveal} triggerOnce keyframes={customAnimation} sx={{ height: 1 }}>
        <Grid container spacing={1} sx={{ height: 1 }}>
          <Grid item xs={12} md={6} alignContent="center" sx={{ height: { md: 1 } }}>
            <Stack spacing={3}>
              <Stack spacing={3}>
                <Typography
                  variant="h1"
                  fontWeight="600"
                  fontSize={{ xs: 54, md: '5rem' }}
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
                  <IconButton href={URLS.BLOG}>
                    <IconBrandBlogger />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Github">
                  <IconButton href={URLS.GITHUB} target="_blank">
                    <IconBrandGithub />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Twitter">
                  <IconButton href={URLS.TWITTER} target="_blank">
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
          </Grid>
          <Grid item xs={12} md={6} alignContent={{ md: 'center' }} sx={{ height: { md: 1 } }}>
            <HeroImage
              alignContent="center"
              justifyContent="center"
              sx={{ height: { xs: '200px', md: '500px' }, width: '100%' }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
