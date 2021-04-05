import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
   style: {
      paddingRight: ({right}) => `${right}px`,
      paddingLeft: ({left}) => `${left}px`,
   }
})

const Padder = ({children, left ,right}) => {
   const classes = useStyles({ left,right })

   return <div className={classes.style}>{children}</div>
}

export default Padder
