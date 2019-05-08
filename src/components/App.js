import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import PageHome from './PageHome'
import Page404 from './Page404'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Router>
            <Switch>
              <Route exact path="/" component={PageHome} />
              <Route path="/404" component={Page404} />
              <Route component={Page404} />
            </Switch>
          </Router>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
