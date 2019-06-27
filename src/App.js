import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ApolloProvider } from 'react-apollo'

import './App.scss'

import graphqlClient from 'helper/appsync-client'

import ScrollToTop from 'components/scroll-to-top'
import Navigation from 'components/navigation'
import Footer from 'components/footer'

import Home from 'pages/home'
import ProjectList from 'pages/project-list'
import ProjectDetail from 'pages/project-detail'

const App = () => (
  <ApolloProvider client={graphqlClient}>
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
  </ApolloProvider>
)

export default App
