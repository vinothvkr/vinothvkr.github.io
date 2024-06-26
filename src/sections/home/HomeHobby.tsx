import {
  SiDocker,
  SiDockerHex,
  SiOpenwrt,
  SiOpenwrtHex,
  SiPfsense,
  SiPfsenseHex,
  SiProxmox,
  SiProxmoxHex,
  SiTruenas,
  SiTruenasHex,
} from '@icons-pack/react-simple-icons';
import { Box, Card, Container, Grid, Stack, Typography, useTheme } from '@mui/material';
import { Slide } from 'react-awesome-reveal';

export default function HomeHobby() {
  const theme = useTheme();
  const services = [
    {
      name: 'pfsense',
      icon: (
        <SiPfsense color={theme.palette.mode === 'light' ? SiPfsenseHex : '#FFFFFF'} size={200} />
      ),
    },
    {
      name: 'OpenWRT',
      icon: <SiOpenwrt color={SiOpenwrtHex} size={200} />,
    },
    {
      name: 'Proxmox',
      icon: <SiProxmox color={SiProxmoxHex} size={200} />,
    },
    {
      name: 'Truenas',
      icon: <SiTruenas color={SiTruenasHex} size={200} />,
    },
    {
      name: 'Docker',
      icon: <SiDocker color={SiDockerHex} size={200} />,
    },
  ];
  return (
    <Container maxWidth="xl">
      <Box mt={10} mb={10}>
        <Slide triggerOnce direction="down">
          <Stack spacing={3}>
            <Typography fontWeight="500" textAlign="center" variant="h2">
              Hobbyist Homelab
            </Typography>
            <Typography fontWeight="500" textAlign="center" variant="body1">
              Services I run in my homelab servers
            </Typography>
          </Stack>
        </Slide>
      </Box>
      {/* Grid in the Box component */}
      <Grid justifyContent="center" container spacing={{ xs: 3, lg: 10 }}>
        {services &&
          services.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Slide triggerOnce direction="up">
                <Card sx={{ px: '20px', py: '40px' }}>
                  <Box sx={{ width: '200px', height: '200px', margin: 'auto' }}>{item.icon}</Box>
                  <Typography component="h5" variant="h3" textAlign="center" sx={{ mt: 4 }}>
                    {item.name}
                  </Typography>
                </Card>
              </Slide>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
