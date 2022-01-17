import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import Banner from './pages/Home/Banner/Banner';
import Header from './pages/Shared/Header/Header';
import About from './pages/Home/About/About';
import Facilities from './pages/Home/Facilities/Facilities';
import Counter from './pages/Home/Counter/Counter';
import Appointment from './pages/Home/Appointment/Appointment';
import Posts from './pages/Home/Posts/Posts';
import Footer from './pages/Shared/Footer/Footer';
import Reviews from './pages/Home/Reviews/Reviews';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Facilities />
      <Reviews />
      <Counter />
      <Appointment />
      <Posts />
      <Login />
      <Registration />
      <Footer />
    </>
  );
}

export default App;
