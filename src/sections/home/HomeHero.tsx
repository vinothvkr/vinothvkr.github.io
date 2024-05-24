import HeroImage from '@/assets/Home/HeroImage';
import { m } from 'framer-motion';
import { varFade } from '@/components/animate/variants/fade';
import { URLS } from '@/config';
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
import MotionContainer from '@/components/animate/MotionContainer';

export default function HomeHero() {
  const { isDesktop } = useScreenDetector();
  const theme = useTheme();

  return (
    <Container maxWidth="xl" sx={{ height: '100vh' }} component={MotionContainer}>
      <Grid container spacing={10} sx={{ height: 1 }}>
        <Grid item xs={12} md={6} sx={{ height: 1 }}>
          <Box alignContent="center" sx={{ height: 1 }}>
            <Stack spacing={3}>
              <Stack spacing={3}>
                <m.div variants={varFade().inUp}>
                  <Typography
                    variant="h1"
                    fontWeight="600"
                    fontSize={{ xs: 64, md: '5rem' }}
                    component="h1"
                    textAlign={{ xs: 'center', md: 'inherit' }}
                  >
                    Vinoth Kumar Rajendran
                  </Typography>
                </m.div>

                <m.div variants={varFade().inUp}>
                  <Typography
                    variant="h5"
                    component="h2"
                    textAlign={{ xs: 'center', md: 'inherit' }}
                    color={theme.palette.primary.main}
                  >
                    Senior Software Engineer
                  </Typography>
                </m.div>
              </Stack>
              <m.div variants={varFade().inUp}>
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
              </m.div>
              <m.div variants={varFade().inUp}>
                <Box
                  justifyContent={{ xs: 'center', md: 'inherit' }}
                  textAlign={{ xs: 'center', md: 'inherit' }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    component={HashLink}
                    to="#contact"
                    smooth
                  >
                    Contact
                  </Button>
                </Box>
              </m.div>
            </Stack>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box alignContent="center" sx={{ height: 1 }}>
            <m.div variants={varFade({ distance: 200 }).inRight}>
              <HeroImage sx={{ height: 1 }} />
            </m.div>
          </Box>
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
