import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import les composants de pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projet from './pages/Projets'
import Error from './pages/Error'

//import components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//Component
function App() {
  //La structure de Navigation, présentation de page, composants et liens 
  return (
    <Router>
      <Navbar />
      <Switch>
        {/*Les routes de pages et leur liens */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projets">
          <Projet />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App