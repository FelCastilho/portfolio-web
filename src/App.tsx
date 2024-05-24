import './App.css'
import { Header } from './components/header';
import { Hero } from './pages/hero';
import { About } from './pages/about';
import { Services } from './pages/services';
import { Projects } from './pages/projects';
import { Technology } from './pages/technology';
import { Footer } from './pages/footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Technology />
      <Footer />
    </>
  );
}

export default App;
