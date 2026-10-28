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
      <Home />
    </>
  )
}

export default App
