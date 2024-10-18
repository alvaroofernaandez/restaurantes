import {Restaurantes} from './components/Restaurantes.tsx'
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Restaurantes />
      <Footer />
    </div>
  );
}

export default App;
