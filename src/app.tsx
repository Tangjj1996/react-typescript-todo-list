import * as React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './views/home'
import About from './views/about'
interface appProp {
  name: string
}
const App: React.FC<appProp> = ({ name }) => {
  return (
    <Router>
      <Link to="/home">go to home</Link>
      <Link to="/aboutss">go to about</Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
