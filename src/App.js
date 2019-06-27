import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ApolloProvider } from 'react-apollo'

import './App.scss'

import graphqlClient from 'helper/appsync-client'

import ScrollToTop from 'components/scroll-to-top'
import Navigation from 'components/navigation'
import Footer from 'components/footer'
import Spinner from 'components/spinner'

import Home from 'pages/home'

import withTracker from 'helper/withTracker'

const ProjectList = lazy(() => import('pages/project-list'))
const ProjectDetail = lazy(() => import('pages/project-detail'))

const App = () => (
  <ApolloProvider client={graphqlClient}>
    <BrowserRouter>
      <ScrollToTop>
        <div className="App">
          <Navigation/>
          <div className="App-content">
            <Suspense fallback={<Spinner />}>
              <Switch>
                <Route path="/" exact component={withTracker(Home)} />
                <Route path="/projects" exact component={withTracker(ProjectList)} />
                <Route path="/projects/:project" component={withTracker(ProjectDetail)} />
              </Switch>
            </Suspense>
          </div>
          <Footer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  </ApolloProvider>
)

export default App
