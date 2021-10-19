import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
  },
  cardMedia: {
    paddingTop: "100%",
    borderRadius: "50%",
  },
  tableHeader: {
    fontSize: 20,
    borderBottom: "none",
  },
  tableValue: {
    fontSize: 20,
    borderBottom: "none",
  },
  title: {
    margin: 0,
    padding: 0,
    marginBottom: theme.spacing(2.5),
  },
}));
