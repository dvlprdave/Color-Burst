import { makeStyles } from '@material-ui/core/styles'
import sizes from '../../Theme/sizes'

const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  hide: {
    display: 'none'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px',
    backgroundColor: '#0f1918'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),

  },
  navBtns: {
    marginRight: '1rem',
    [sizes.down('xs')]: {
      marginRight: '0.5rem'
    }
  },
  button: {
    margin: '0 0.5rem',
    [sizes.down('xs')]: {
      margin: '0 0.2rem',
      padding: '0.2rem'
    }
  }
}))

export default useStyles