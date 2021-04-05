import { createUseStyles } from 'react-jss'

import PageContainer from '../components/PageContainer'
import Text from '../components/Text'
import useViewport from '../hooks/useViewPort'

const useStyles = createUseStyles({
   container: {
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: ({isSmallScreen}) => isSmallScreen ? '500px' : '800px'
   }
})

const InProgress = () => {
   const isSmallScreen = useViewport('(max-width: 760px)')
   const classes=useStyles({isSmallScreen})

   return (
      <PageContainer>
         <div className={classes.container}>
            <Text
               variant={ isSmallScreen ? "medium" : "big"}
               bold
               color="#8c9196"
            >
               Work in Progress!
               Please come again later
            </Text>
         </div>
      </PageContainer>
   )
}

export default InProgress

