import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import Banner from './pages/Home/Banner/Banner';
import Header from './pages/Shared/Header/Header';
import About from './pages/Home/About/About';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
    </>
  );
}

export default App;
