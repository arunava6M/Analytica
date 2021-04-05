import {createUseStyles} from 'react-jss'
import { Link } from'react-router-dom'
import {MdDashboard, MdVpnLock, MdAccountCircle, MdMessage, MdCreate, MdShowChart, MdAddAlert } from 'react-icons/md'

import Padder from './Padder'
import Grouped from './Grouped'
import sidebarItems from '../constants/sidebarItems'
import Text from './Text'
import useViewport from '../hooks/useViewPort'

const typography = {
   fontFamily: 'proxima-nova, sans-serif',
   fontSize: 12,
   fontWeight: 500,
   lineHeight: 1.2,
   color: 'white'
}

const useStyles = createUseStyles({
   sieBarContainer: {
      flex: ({open, isSmallScreen}) => isSmallScreen ? 0 : (open ? 1 : 0.2),
      backgroundColor: '#3ca5c2',
      boxShadow: '5px 0px 28px -10px rgba(0,0,0,0.36)',
      transition: 'all 0.2s ease 0s'
   },

   logoContainer: {
      ...typography,
   
      fontSize: ({isSmallScreen}) => isSmallScreen ? 20 : 34,
      fontWeight: 700,
      height: ({isSmallScreen}) => isSmallScreen ? '60px' : '150px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'

   },

   links: {
      display: 'flex',
      flexDirection: ({isSmallScreen}) => isSmallScreen ? 'row' : 'column',
      paddingLeft: '20px',
      justifyContent: 'space-around'
   },

   itemContainer: {
      height: '80px',
      maxWidth: '100px',
      display: 'flex',
      flexDirection: 'row',
      // justifyContent: 'flex-start',
      cursor: 'pointer',
      color: 'white',
      textDecoration: 'none',

      '&:hover': {
         color: '#e6db15'
      }
   },

   icon: {
      fontSize: 24
   },
   textDelay: {
      transitionDuration: '1s',
      transitionDelay: '2s'
   }
})

const Sidebar = ({ open }) => {
   const isSmallScreen = useViewport('(max-width: 760px)')
   const classes = useStyles({ open, isSmallScreen })

   const sideBarItemRenderer = () => {
      return sidebarItems.map( ({icon, title, link}) => (
         // <div className={classes.itemContainer}>
            <Link to={link} className={classes.itemContainer}>
               <Grouped>
                  <div className={classes.icon}>{icon}</div>
                  {!isSmallScreen && open &&
                     <Padder left={30}>
                        <Text color="white" variant="medium">{title}</Text>
                     </Padder>
                  }
               </Grouped>
            </Link>
         // </div>
      ))
   }

   return (
      <div className={classes.sieBarContainer}>
         <div className={classes.logoContainer}>
            < MdVpnLock />
            {isSmallScreen ?
               <div className={classes.textDelay}>Covid-19</div> :
               (open &&
                  <div className={classes.textDelay}>Covid-19</div>
               )
            }
         </div>
         { isSmallScreen ?
            (open &&
               <div className={classes.links}>
                  {sideBarItemRenderer()}
               </div>) :
            <div className={classes.links}>
               {sideBarItemRenderer()}
            </div>
         }
      </div>
   )
}

export default Sidebar