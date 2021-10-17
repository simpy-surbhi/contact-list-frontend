import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  typography: {
width:"100%",
textAlign:"center",
margin:theme.spacing(2),
  },
box: {
  display:"flex",
  justifyContent:"center",
},
  tab: {
    fontSize: 20,
    minWidth: 59,
    margin: theme.spacing(0.3),
    background: theme.palette.common.white,
  },
}));

