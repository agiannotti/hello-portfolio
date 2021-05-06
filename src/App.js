import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Grid } from '@material-ui/core';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Portfolio from './pages/Portfolio/Portfolio';
import Profile from './components/Profile/Profile';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className='main_content container_shadow'>
              <Switch>
                <Route path='/portfolio'>
                  <Portfolio />
                </Route>
                <Route path='/'>
                  <Resume />
                </Route>
                <Route path='/contact'>
                  <Contact />
                </Route>
                <Route path='/blog'>
                  <Blog />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
