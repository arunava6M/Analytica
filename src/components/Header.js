import {createUseStyles} from 'react-jss'
import {MdAccountCircle, MdKeyboardArrowDown } from 'react-icons/md'

import Grouped from './Grouped'
import Padder from './Padder'
import Text from './Text'
import useViewport from '../hooks/useViewPort'

const useStyles = createUseStyles({
   headerContainer: {
      fontSize: 18,
      fontWeight: 500,
      height: ({isSmallScreen}) => isSmallScreen ? '90px' : '60px',
      display: 'flex',
      flexDirection: ({isSmallScreen}) => isSmallScreen ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: ({isSmallScreen}) => isSmallScreen ? 'left' : 'center',
      padding: '10px'

   },
   icon: {
      fontSize: 34,
      color: '#3ca5c2',
      paddingRight: ({isSmallScreen}) => !isSmallScreen && '50px',
      paddingLeft: '50px'
   },
   search: {
      width: ({isSmallScreen}) => isSmallScreen ? '100%' : '40%',
      border: '3px solid #00B4CC',
      border: 'none',
      padding: '5px',
      height: '30px',
      borderRadius: '5px 0 0 5px',
      outline: 'none',
      color: '#8c9196'
   }
})

const Header = () => {
   const isSmallScreen = useViewport('(max-width: 760px)')

   const classes = useStyles({ isSmallScreen })

   const searchHandler = event => console.log(event.target.value)
   return (
      <div className={classes.headerContainer}>
         {!isSmallScreen &&
            <>
               <input type="search" className={classes.search} placeholder="Search your district or state" onChange={searchHandler}/>
               <Grouped>
                  <Text bold color="#8c9196">Last Updated on 04 Apr, 9:56 PM IST</Text>
                  <div className={classes.icon}><MdAccountCircle/></div>
               </Grouped>
            </>
         }
         {isSmallScreen &&
            <>
               <Grouped>
                  <Text bold color="#8c9196">Last Updated on 04 Apr, 9:56 PM IST</Text>
                  <div className={classes.icon}><MdAccountCircle/></div>
               </Grouped>
               <input type="search" className={classes.search} placeholder="Search your district or state" onChange={searchHandler}/>
            </>
         }
         
      </div>
   )
}

export default Header