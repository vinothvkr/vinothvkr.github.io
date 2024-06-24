import { CssBaseline } from '@mui/material';
import {
  StyledEngineProvider,
  ThemeOptions,
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
import { useMemo } from 'react';
import palette from './palette';
import { useSettingsContext } from '@/hooks/useSettingsContext';
import componentsOverride from './overrides';

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const { themeMode } = useSettingsContext();

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette(themeMode),
      shape: { borderRadius: 8 },
    }),
    [themeMode]
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
