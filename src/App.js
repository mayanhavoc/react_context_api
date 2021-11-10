import Navbar from './Navbar';
import Form from './Form';
import PageContent from './PageContent';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
    <PageContent>
      <Navbar />
      <Form /> 
    </PageContent>
    </ThemeProvider>
  );
}

export default App;
