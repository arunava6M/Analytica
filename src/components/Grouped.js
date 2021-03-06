import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
   styles: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start'
   }
})

const Grouped = ({ children }) => {
   const classes = useStyles()
   return <div className={classes.styles}>{children}</div>
}

export default Grouped
