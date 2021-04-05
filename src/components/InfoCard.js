import { createUseStyles } from 'react-jss'
import Proptypes from 'prop-types'

const useStyles = createUseStyles({
   container: {
      gridArea: ({gridArea}) => gridArea,
      display: 'flex',
      flexDirection: ({direction}) => direction,
      justifyContent: ({justifyContent}) => justifyContent,
      backgroundColor: 'white',
      borderRadius: '3%',
      textAlign: 'center',
      margin: '10px',
      padding: '20px'
   }
})


const InfoCard = ({children, gridArea, direction, justifyContent}) => {
   const classes=useStyles({ gridArea, direction, justifyContent })

   return (
      <div className={classes.container}>{children}</div>
   )
}

InfoCard.propTypes = {
   children: Proptypes.node.isRequired,
   gridArea: Proptypes.string,
   direction: Proptypes.oneOf(['row', 'column']),
   justifyContent: Proptypes.string
}

InfoCard.defaultProps = {
   gridArea: false,
   direction: 'column',
   justifyContent: 'space-between'
}

export default InfoCard
