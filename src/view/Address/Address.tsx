import { Grid, makeStyles } from "@material-ui/core";
import { Contact } from "model";
import * as React from "react";
import { AddressList } from "./components/List";
import { AddressTab } from "./components/Tab";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
  },
}));

export interface TabInfo {
  tabName: string;
  count: number;
}

export const Address: React.FC = () => {
  const classes = useStyles();
  const [contacts, setContacts] = React.useState<Contact[]>([]);
  const pathName = window.location.href.substring(
    window.location.href.indexOf("#") + 1
  );

  const [tabValue, setTab] = React.useState<String>(
    pathName.length === 1 && typeof pathName === "string"
      ? pathName.toUpperCase()
      : "A"
  );

  return (
    <React.Fragment>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={12} lg={12}>
          <AddressTab setTab={setTab} tabValue={tabValue} contacts={contacts} />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <AddressList
            tabValue={tabValue}
            setContacts={setContacts}
            contacts={contacts}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
