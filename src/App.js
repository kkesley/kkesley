import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"

import Home from 'pages/home'
import ProjectDetail from 'pages/project-detail'
import Navigation from 'components/navigation'
import Footer from 'components/footer'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/projects/:project" component={ProjectDetail} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
