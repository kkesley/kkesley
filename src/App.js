import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import './App.scss'

import ScrollToTop from 'components/scroll-to-top'
import Navigation from 'components/navigation'
import Footer from 'components/footer'

import Home from 'pages/home'
import ProjectList from 'pages/project-list'
import ProjectDetail from 'pages/project-detail'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className="App">
          <Navigation/>
          <div className="App-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/projects" exact component={ProjectList} />
              <Route path="/projects/:project" component={ProjectDetail} />
            </Switch>
          </div>
          <Footer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
