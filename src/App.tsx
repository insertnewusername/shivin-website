import { Route, Switch } from 'wouter'
import './App.css'
import Home from './Home'
import Nav from './Nav'
import Registration from './Registration'
import Confirmation from './Confirmation'

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Registration />
        </Route>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
        <Route>
          <p>Error 404</p>
        </Route>
      </Switch>
      
      
      
    </>
  )
}

export default App
