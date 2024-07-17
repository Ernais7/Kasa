import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/home.jsx';
import About from './pages/About';
import Housing from './pages/Housing';
import NotFound from './pages/NotFound';


function AppRouter() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/housing" component={Housing} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }

export default AppRouter;
