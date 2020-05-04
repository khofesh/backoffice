import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { drawerWidth } from "./commonVariables";

export const footerStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      flexGrow: 1,
      padding: theme.spacing(2),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0,
    },
    footerShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: drawerWidth,
    },
  })
);
