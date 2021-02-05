import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import CssBaseline from '@material-ui/core/CssBaseline'

import TestPage from 'pages/TestPage'
import WorldPage from 'pages/WorldPage'
import CountryPage from 'pages/CountryPage'
import StatePage from 'pages/StatePage'
import CityPage from 'pages/CityPage'

import 'css/App.css'

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL,
  credentials: 'include',
})

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/country/:countryId/city/:cityId">
              <CityPage />
            </Route>
            <Route path="/country/:countryId/state/:stateId">
              <StatePage />
            </Route>
            <Route path="/country/:countryId">
              <CountryPage />
            </Route>
            <Route path="/world">
              <WorldPage />
            </Route>
            <Route path="/test">
              <TestPage />
            </Route>
            <Route path="/">
              <WorldPage />
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  )
}

export default App
