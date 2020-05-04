import React, { FunctionComponent } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "@reach/router";

import { drawerStyles } from "../../assets/styles/drawer";

interface DrawerLeftProps {
  open?: boolean;
  handleDrawerClose?: () => void;
}

const DrawerLeft: FunctionComponent<DrawerLeftProps> = ({
  open,
  handleDrawerClose,
}) => {
  const classes = drawerStyles();

  return (
    <Drawer
      className={classes.drawer}
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
      elevation={10}
      onClose={handleDrawerClose}
    >
      <div onClick={handleDrawerClose} onKeyDown={handleDrawerClose}>
        <List>
          {[
            { text: "Dashboard", route: "/" },
            { text: "Portofolios", route: "/portofolios" },
            { text: "Profile", route: "/profile/123" },
            { text: "Drafts", route: "/klsjdfsd" },
          ].map((item, index) => (
            <ListItem button key={item.text} to={item.route} component={Link}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default DrawerLeft;
