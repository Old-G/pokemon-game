import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom'
import cn from 'classnames'
import HomePage from './routes/Home'
import GamePage from './routes/Game'
import AboutPage from './routes/About'
import ContactPage from './routes/Contact'
import NotFoundPage from './routes/NotFound'
import MenuHeader from './components/MenuHeader'
import Footer from './components/Footer'

import { FireBaseContext } from './context/firebaseContext'

import s from './style.module.css'
import Firebase from './service/fairbase'

const App = () => {
  const match = useRouteMatch('/')

  return (
    <FireBaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path='/404' component={NotFoundPage} />
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact} />
            <div className={cn(s.wrap, { [s.isHomepage]: match.isExact })}>
              <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/game' component={GamePage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/contact' component={ContactPage} />
                <Route render={() => <Redirect to='/404' />} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
    </FireBaseContext.Provider>
  )
}

export default App
