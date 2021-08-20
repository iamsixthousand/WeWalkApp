import React from 'react'
import { Route } from 'react-router-dom'
import WhatsNew from './components/WhatsNew'
import CitiesPage from './components/CitiesList'
import PlacesPage from './components/PlacesPage'
import MainPage from './components/MainPage'
import SignIn from './components/SignIn'
import Register from './components/Register'
import ScrollToTop from './components/ScrollTop'
import KeyFeatures from './components/KeyFeatures'
import OurApp from './components/OurApp'
import Favourites from './components/Favourites'



// eslint-disable-next-line import/no-anonymous-default-export
class Routes extends React.Component {

  render() {
    return (
      <div>
        <ScrollToTop>
    
            <Route exact path='/' component={MainPage} />
            <Route path='/ourapp' component={OurApp} />
            <Route path='/whatsnew' component={WhatsNew} />
            <Route path='/cities' component={CitiesPage} />
            <Route path='/places/:city' component={PlacesPage} />
            <Route path='/keyfeatures' component={KeyFeatures} />
            <Route path='/signin' component={SignIn} />
            <Route path='/register' component={Register} />
            <Route path='/places/favourites' component={Favourites} />

        </ScrollToTop>
      </div>
    )
  }
}

export default Routes;