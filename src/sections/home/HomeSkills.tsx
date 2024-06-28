import CloudImage from '@/assets/Home/CloudImage';
import SkillsImage from '@/assets/Home/SkillsImage';
import {
  SiAmazonwebservices,
  SiAmazonwebservicesHex,
  SiAngular,
  SiAngularHex,
  SiAzuredevops,
  SiAzuredevopsHex,
  SiCsharp,
  SiCsharpHex,
  SiCss3,
  SiCss3Hex,
  SiDigitalocean,
  SiDigitaloceanHex,
  SiDotnet,
  SiDotnetHex,
  SiGithubactions,
  SiGithubactionsHex,
  SiGooglecloud,
  SiGooglecloudHex,
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
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { IconStarFilled } from '@tabler/icons-react';
import { Slide } from 'react-awesome-reveal';

const skills = [
  {
    title: 'Full Stack Development',
    image: (
      <SkillsImage
        alignContent="center"
        justifyContent="center"
        sx={{ height: { xs: '300px', md: '500px' }, width: '100%' }}
      />
    ),
    stackIcons: [
      { title: 'C#', icon: <SiCsharp color={SiCsharpHex} size={64} /> },
      { title: '.Net', icon: <SiDotnet color={SiDotnetHex} size={64} /> },
      { title: 'Html 5', icon: <SiHtml5 color={SiHtml5Hex} size={64} /> },
      { title: 'CSS 3', icon: <SiCss3 color={SiCss3Hex} size={64} /> },
      { title: 'JavaScript', icon: <SiJavascript color={SiJavascriptHex} size={64} /> },
      { title: 'TypeScript', icon: <SiTypescript color={SiTypescriptHex} size={64} /> },
      { title: 'Nodejs', icon: <SiNodedotjs color={SiNodedotjsHex} size={64} /> },
      { title: 'React', icon: <SiReact color={SiReactHex} size={64} /> },
      { title: 'Angular', icon: <SiAngular color={SiAngularHex} size={64} /> },
      { title: 'MUI', icon: <SiMui color={SiMuiHex} size={64} /> },
    ],
    descriptions: [
      'Extensive experience in building various types of Web Application with using C#, ASP.NET Core',
      'Experience in developing responsive front end web application utilizing React/Angular/Knockout',
    ],
  },
  {
    title: 'Cloud Architecture',
    image: (
      <CloudImage
        alignContent="center"
        justifyContent="center"
        sx={{ height: { xs: '300px', md: '500px' }, width: '100%' }}
      />
    ),
    stackIcons: [
      { title: 'Azure DevOps', icon: <SiAzuredevops color={SiAzuredevopsHex} size={64} /> },
      { title: 'Digitalocean', icon: <SiDigitalocean color={SiDigitaloceanHex} size={64} /> },
      { title: 'Github Actions', icon: <SiGithubactions color={SiGithubactionsHex} size={64} /> },
      { title: 'AWS', icon: <SiAmazonwebservices color={SiAmazonwebservicesHex} size={64} /> },
      { title: 'Google Cloud', icon: <SiGooglecloud color={SiGooglecloudHex} size={64} /> },
    ],
    descriptions: [
      'Designing and implementing cloud-native architectures, microservices, and serverless applications',
      'Experience in establishing and maintaining robust CI/CD pipelines for efficient and automated software delivery',
      'Experience in building github workflows',
    ],
  },
];

export default function HomeSkills() {
  const theme = useTheme();
  return (
    <Container maxWidth="xl">
      <Box mt={3} mb={10}>
        <Slide triggerOnce direction="down">
          <Typography fontWeight="500" textAlign="center" variant="h2">
            What I do?
          </Typography>
        </Slide>
      </Box>
      <Stack spacing={20}>
        {skills &&
          skills.map((skill, index) => (
            <Grid key={index} container spacing={1}>
              <Grid item xs={12} md={6}>
                <Slide triggerOnce>{skill.image}</Slide>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={5}>
                  <Slide triggerOnce direction="right">
                    <Typography
                      fontWeight="400"
                      variant="h3"
                      textAlign={{ xs: 'center', md: 'inherit' }}
                    >
                      {skill.title}
                    </Typography>
                  </Slide>
                  <Slide triggerOnce direction="right" duration={1200}>
                    <Stack
                      direction="row"
                      spacing={3}
                      useFlexGap
                      flexWrap={{ xs: 'wrap', md: 'inherit' }}
                      justifyContent={{ xs: 'center', md: 'inherit' }}
                    >
                      {skill.stackIcons?.map((icon, index) => (
                        <Tooltip key={index} title={icon.title}>
                          {icon.icon}
                        </Tooltip>
                      ))}
                    </Stack>
                  </Slide>
                  <Slide triggerOnce direction="right" duration={1500}>
                    <List>
                      {skill.descriptions &&
                        skill.descriptions.map((description, index) => (
                          <ListItem key={index}>
                            <ListItemIcon>
                              <IconStarFilled color={theme.palette.warning.main} />
                            </ListItemIcon>
                            <ListItemText primary={description} />
                          </ListItem>
                        ))}
                    </List>
                  </Slide>
                </Stack>
              </Grid>
            </Grid>
          ))}
      </Stack>
    </Container>
  );
}
