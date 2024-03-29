import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    maxWidth: '600px',
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignContent: 'center',
    justifyContent: 'center',

  },
  
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#895b50'
    
  },
  form: {
    marginTop: theme.spacing(3),
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    display: 'block',
    margin: 'auto',
    width: '80%'
    

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: '12px'

  },
  googleButton: {
    padding: '12px',
    backgroundColor: '#497587',
    "&:hover": {
      background: "#355664"
    },
      },

  

}));