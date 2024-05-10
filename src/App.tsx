import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme';
import Router from './routes';
import { SettingsProvider } from './components/settings/SettingsContext';

// FONTS
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <BrowserRouter>
      <SettingsProvider>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </SettingsProvider>
    </BrowserRouter>
  );
}

export default App;
