import * as React from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const Home = lazy(() => import('./views/home'))
const About = lazy(() => import('./views/about'))
interface appProp {
  name: string
}
const App: React.FC<appProp> = ({ name }) => {
  return (
    <Router>
      <Link to="/home">go to home</Link>
      <Link to="/about">go to about</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="*" component={() => <div>404</div>}></Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
