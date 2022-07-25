import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Home } from './entities/home';
import { Footer } from './entities/templates/footer';
import { TopPage } from './entities/templates/top';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopPage />
        <Home />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
