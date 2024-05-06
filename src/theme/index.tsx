import { CssBaseline } from '@mui/material';
import {
  StyledEngineProvider,
  ThemeOptions,
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
import { useMemo } from 'react';
import palette from './palette';

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette('light'),
      // typography,
      shape: { borderRadius: 8 },
      // shadows: shadows(themeMode),
      // customShadows: customShadows(themeMode),
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
