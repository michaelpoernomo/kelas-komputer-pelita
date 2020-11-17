import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  body: {
    background: 'black',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    margin: '0px',
    padding: '0px',
    width: '100vw',
    height: '100vh',
  },
  container: {
    position: 'absolute',
    top: 0,
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    display: 'hidden',
  },
  video: {
    'min-width': '100%',
    'min-height': '100%',
    width: 'auto',
    height: 'auto',
    position: 'absolute',
    left: '50%',
    top: '20%',
    transform: 'translate(-50%, -50%)',
  },
})

export default useStyles
