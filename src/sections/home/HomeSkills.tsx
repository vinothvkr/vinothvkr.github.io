import CloudImage from '@/assets/Home/CloudImage';
import SkillsImage from '@/assets/Home/SkillsImage';
import {
  SiAmazonaws,
  SiAmazonawsHex,
  SiAngular,
  SiAngularHex,
  SiAzuredevops,
  SiAzuredevopsHex,
  SiCsharp,
  SiCsharpHex,
  SiCss3,
  SiCss3Hex,
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
  Typography,
  useTheme,
} from '@mui/material';
import { IconStarFilled } from '@tabler/icons-react';
import { Slide } from 'react-awesome-reveal';

const skills = [
  {
    Title: 'Full Stack Development',
    Image: (
      <SkillsImage
        alignContent="center"
        justifyContent="center"
        sx={{ height: { xs: '300px', md: '500px' }, width: '100%' }}
      />
    ),
    StackIcons: [
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
    ],
    Descriptions: [
      'Extensive experience in building various types of Web Application with using C#, ASP.NET Core',
      'Experience in developing responsive front end web application utilizing React/Angular/Knockout',
    ],
  },
  {
    Title: 'Cloud Architecture',
    Image: (
      <CloudImage
        alignContent="center"
        justifyContent="center"
        sx={{ height: { xs: '300px', md: '500px' }, width: '100%' }}
      />
    ),
    StackIcons: [
      <SiAzuredevops color={SiAzuredevopsHex} size={64} />,
      <SiGithubactions color={SiGithubactionsHex} size={64} />,
      <SiAmazonaws color={SiAmazonawsHex} size={64} />,
      <SiGooglecloud color={SiGooglecloudHex} size={64} />,
    ],
    Descriptions: [
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
        <Slide triggerOnce direction="up">
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
                <Slide triggerOnce>{skill.Image}</Slide>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={5}>
                  <Slide triggerOnce direction="right">
                    <Typography
                      fontWeight="400"
                      variant="h3"
                      textAlign={{ xs: 'center', md: 'inherit' }}
                    >
                      {skill.Title}
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
                      {skill.StackIcons}
                    </Stack>
                  </Slide>
                  <Slide triggerOnce direction="right" duration={1500}>
                    <List>
                      {skill.Descriptions &&
                        skill.Descriptions.map((description, index) => (
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
