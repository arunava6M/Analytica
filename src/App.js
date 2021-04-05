import {createUseStyles} from 'react-jss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import { useState } from 'react'

import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import useViewport from './hooks/useViewPort'
import InProgress from './pages/InProgress'
import NotFound from './pages/NotFound'

const useStyles = createUseStyles({
  appContainer: {
    height: '100%',
    width: '100%',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: ({isSmallScreen}) => isSmallScreen ? 'column' : 'row',
    backgroundColor: '#e0e0e0',
    color: '#828282'
  },
  sidebarIcon: {
    // paddingTop: '20px',
    fontSize: 40,
    color: '#8c9196',
    cursor: 'pointer',

    '&:hover': {
      color: '#3ca5c2'
   }
  }
})

const routes = (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/account" component={InProgress} />
    <Route path="/health" component={InProgress} />
    <Route path="/about" component={InProgress} />
    <Route path="/notification" component={InProgress} />
    <Route component={NotFound} />
  </Switch>
)

function App() {
  const isSmallScreen = useViewport('(max-width: 760px)')
  const classes = useStyles({isSmallScreen})
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  const toggleSideBar = () => setSidebarOpen(!sidebarOpen)

  return (
    <Router>
      <div className={classes.appContainer}>
        <Sidebar open={sidebarOpen}/>
        <div className={classes.sidebarIcon} onClick={toggleSideBar}>
          {
          isSmallScreen ? (sidebarOpen ? <MdKeyboardArrowUp /> : < MdKeyboardArrowDown/>) :
            (sidebarOpen ? <MdKeyboardArrowLeft /> : < MdKeyboardArrowRight />)
          }
        </div>
        <Route>
          {routes}
        </Route>
      </div>
    </Router>
  );
}

export default App;
