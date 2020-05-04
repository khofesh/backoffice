import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import clsx from "clsx";
import { DrawerInterface } from "../../actions/interfaces";

import { footerStyles } from "../../assets/styles/footer";

interface FooterProps {
  drawer: DrawerInterface;
}

export const Footer: React.FC<FooterProps> = (props) => {
  const classes = footerStyles();

  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      className={clsx(classes.footer, {
        [classes.footerShift]: props.drawer.isOpen,
      })}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
