import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'auto',
    maxHeight: 485,
    overflowY: 'scroll',
    padding: theme.spacing(1),
  },
  card: {
    marginBottom: theme.spacing(2),
    width:"100%",
  },
  cardMedia: {
    borderRadius: '50%',
    height: 30,
    width: 30,
    padding: theme.spacing(2),
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  typography: {
    paddingLeft: theme.spacing(1.5),
    textAlign: 'left',
    width: '90%',
  },

  info: {
    width:"100%",
textAlign:"center",
margin:20,
  },

  img: {
    width: '10%',
    textAlign: 'right',
  },
  snackbarStyle:{
  backgroundColor:"red"
  },
}));