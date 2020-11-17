import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  'page-container': {
    'background-color': 'white',
    'max-width': '600px',
    [theme.breakpoints.up('xs')]: {
      padding: '2.5em 3em',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '2.5em 10em',
    },
  },
  'page-control': {
    'max-width': '500px',
  },
  'submit-button': {
    'margin-top': '2em',
  },
  'logo-img': {
    width: '100px',
    height: 'auto',
  },
}))

export default useStyles
