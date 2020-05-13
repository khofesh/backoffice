import React, { FunctionComponent } from "react";
import { RouteComponentProps, Location, Link } from "@reach/router";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const All: FunctionComponent<RouteComponentProps> = (props) => {
  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={12} md={8} lg={11}>
        <Location>
          {({ location }) => {
            let pathnames = location.pathname.split("/").filter((x) => x);

            return (
              <Breadcrumbs aria-label="breadcrumb">
                {pathnames.map((value, index) => {
                  const last = index === pathnames.length - 1;
                  const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                  return last ? (
                    <Typography color="textPrimary" key={to}>
                      {value.toUpperCase()}
                    </Typography>
                  ) : (
                    <Link color="inherit" to={to} key={to}>
                      {value.toUpperCase()}
                    </Link>
                  );
                })}
              </Breadcrumbs>
            );
          }}
        </Location>
      </Grid>

      <Grid item xs={12} md={12} lg={12} xl={12}>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default All;
