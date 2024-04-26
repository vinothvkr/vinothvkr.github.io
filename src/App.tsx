import { Avatar, Box, Container, IconButton, Stack, Typography } from '@mui/material'
import { GitHub, X } from '@mui/icons-material';

// FONTS
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

  return (
    <>
      <Box sx={{height: '100vh'}}>
      <Container sx={{height: 'inherit'}}>
        <Stack sx={{height: 'inherit'}} justifyContent='center' alignItems='center' spacing={3}>
          <Avatar alt='Vinoth Kumar Rajendran' src='/avatar.jpg' sx={{width: 200, height:200}} />
          <Stack alignItems='center'>
            <Typography variant='h3' component='h1' color="#1A2027">
              Vinoth Kumar Rajendran
            </Typography>
            <Typography variant='h5' component='h2' color="#1A2027" sx={{mt: 0}}>
              Senior Software Engineer
            </Typography>
          </Stack>
          <Stack direction='row' spacing={1}>
            <IconButton href='https://github.com/vinothvkr' target='_blank'>
              <GitHub />
            </IconButton>
            <IconButton href='https://twitter.com/_vinothvkr' target='_blank'>
              <X />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
    </>
  )
}

export default App
