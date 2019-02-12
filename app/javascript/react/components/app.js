import React from 'react'
import { Redirect } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Services from '../containers/Services'
import NavigationBar from './NavigationBar'
import Footer from './Footer'
import Prices from '../containers/Prices'
import Work from '../containers/Work'
import 'semantic-ui-css/semantic.min.css'


const App = props => {

  return(
    <BrowserRouter>
      <div>
          <Route exact path="/" component={Home}/>
          <Route path='/services' component={Services} />
          <Route path='/prices' component={Prices} />
          <Route path='/work' component={Work} />
          <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
