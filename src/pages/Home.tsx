import HomeContact from '@/sections/home/HomeContact';
import HomeHero from '@/sections/home/HomeHero';
import HomeHobby from '@/sections/home/HomeHobby';
import HomeSkills from '@/sections/home/HomeSkills';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <>
      <Box sx={{ overflow: 'hidden' }}>
        <HomeHero />
        <HomeSkills />
        <HomeHobby />
        <HomeContact />
      </Box>
    </>
  );
}
