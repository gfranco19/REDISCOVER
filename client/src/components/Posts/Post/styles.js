import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '75%',
    backgroundColor: '#000000',
  },

  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    border: 'solid 1px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    elevation: '3',
    
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
    

  },
  grid: {
    display: 'flex',
    
  },

  // content: {
  //   padding: '7px',
  // },

  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '4px',
    color: '#000000',

  },
  title: {
    padding: '4px',
    color: '#000000',
    fontSize: '18px'
    },

  cardActions: {
    padding: '0 6px 6px 6px',
    display: 'flex',
    justifyContent: 'space-between',
    
  },
  

});