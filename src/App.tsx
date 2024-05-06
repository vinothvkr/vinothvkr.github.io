import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme';
import Header from './layout/Header';
import Router from './routes';

// FONTS
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
