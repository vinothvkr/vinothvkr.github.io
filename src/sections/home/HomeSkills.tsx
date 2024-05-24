import ProfessionImage from '@/assets/Home/SkillsImage';
import {
  SiAngular,
  SiAngularHex,
  SiCsharp,
  SiCsharpHex,
  SiCss3,
  SiCss3Hex,
  SiDotnet,
  SiDotnetHex,
  SiHtml5,
  SiHtml5Hex,
  SiJavascript,
  SiJavascriptHex,
  SiMui,
  SiMuiHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiReact,
  SiReactHex,
  SiTypescript,
  SiTypescriptHex,
} from '@icons-pack/react-simple-icons';
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { IconStarFilled } from '@tabler/icons-react';

const stacks = [
  <SiCsharp color={SiCsharpHex} size={64} />,
  <SiDotnet color={SiDotnetHex} size={64} />,
  <SiHtml5 color={SiHtml5Hex} size={64} />,
  <SiCss3 color={SiCss3Hex} size={64} />,
  <SiJavascript color={SiJavascriptHex} size={64} />,
  <SiTypescript color={SiTypescriptHex} size={64} />,
  <SiNodedotjs color={SiNodedotjsHex} size={64} />,
  <SiReact color={SiReactHex} size={64} />,
  <SiAngular color={SiAngularHex} size={64} />,
  <SiMui color={SiMuiHex} size={64} />,
];

export default function HomeSkills() {
  const theme = useTheme();
  return (
    <Container maxWidth="xl">
      <Box>
        <Box mt="3rem" mb="6rem">
          <Typography fontWeight="500" textAlign="center" variant="h2">
            What I do?
          </Typography>
        </Box>
        <Grid container spacing={10} sx={{ height: 1 }}>
          <Grid item xs={12} md={6} sx={{ height: 1 }}>
            <ProfessionImage alignContent="center" sx={{ height: 1 }} />
          </Grid>
          <Grid item xs={12} md={6} sx={{ height: 1 }}>
            <Stack spacing={5}>
              <Typography fontWeight="400" textAlign="center" variant="h3">
                Full Stack Development
              </Typography>
              <Stack direction="row" spacing={3}>
                {stacks.map(item => (
                  <>{item}</>
                ))}
              </Stack>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <IconStarFilled color={theme.palette.warning.main} />
                  </ListItemIcon>
                  <ListItemText primary="Extensive experience in building various types of Web Application with using C#, ASP.NET Core" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <IconStarFilled color={theme.palette.warning.main} />
                  </ListItemIcon>
                  <ListItemText primary="Experience in developing responsive front end web application utilizing React/Angular/Knockout" />
                </ListItem>
              </List>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
