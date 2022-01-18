import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/Home/PrivateRoute/PrivateRoute';
import Posts from './pages/Home/Posts/Posts';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>

            <PrivateRoute exact path="/post">
              <Posts />
            </PrivateRoute>

            <Route exact path="/register">
              <Registration />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
