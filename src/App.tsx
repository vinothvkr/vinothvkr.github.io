import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme';
import Router from './routes';
import { SettingsProvider } from './components/settings/SettingsContext';

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
