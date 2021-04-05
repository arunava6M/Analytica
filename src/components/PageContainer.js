import { createUseStyles } from 'react-jss'

import Header from '../components/Header'

const useStyles= createUseStyles({
   commonPageContainer: {
      maxHeight: '100%',
      flex: 4
   }
})

const PageContainer= ({ children }) => {
   const classes = useStyles()

   return (
      <div className={classes.commonPageContainer}>
         <Header />
         {children}
      </div>
   )
}

export default PageContainer