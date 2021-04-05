import { createUseStyles } from 'react-jss'

import Text from '../components/Text'
import useViewport from '../hooks/useViewPort'

const useStyles = createUseStyles({
   container: {
      flex: ({isSmallScreen}) => !isSmallScreen && 4,
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: ({isSmallScreen}) => isSmallScreen ? '600px' : '800px'
   }
})

const NotFound = () => {
   const isSmallScreen = useViewport('(max-width: 760px)')
   const classes=useStyles({isSmallScreen})

   return (
         <div className={classes.container}>
            <Text
               variant={ isSmallScreen ? "medium" : "big"}
               bold
               color="#8c9196"
            >
               Page Not Found
            </Text>
         </div>
   )
}

export default NotFound

