import React, { FunctionComponent } from "react";
import { Redirect } from "@reach/router";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import clsx from "clsx";

/* redux */
import { StoreState } from "../reducers";
import {
  AuthenticatedInterface,
  LoginInterface,
  DrawerInterface,
} from "../actions/interfaces";
import { drawerAction } from "../actions/navigations/drawer";

/* components */
import TopBar from "../components/navigations/TopBar";
import DrawerLeft from "../components/navigations/DrawerLeft";

import { contentStyles } from "../components/navigations/styles";

interface MainPageProps {
  authenticated: AuthenticatedInterface;
  login: LoginInterface;
  drawer: DrawerInterface;
  drawerAction(drawer: boolean): any;
}

const _MainPage: FunctionComponent<MainPageProps> = (props) => {
  const classes = contentStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);
  // const [openDrawer, setOpenDrawer] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (
    event: React.MouseEvent<HTMLElement>
  ): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = (): void => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = (): void => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    props.drawerAction(true);
  };

  const handleDrawerClose = () => {
    props.drawerAction(false);
  };

  console.log(props.authenticated);
  if (!props.authenticated.status && !props.login.token)
    return <Redirect to="login" noThrow />;

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <TopBar
        anchorEl={anchorEl}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        isMenuOpen={isMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        handleProfileMenuOpen={handleProfileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleMenuClose={handleMenuClose}
        handleMobileMenuOpen={handleMobileMenuOpen}
        handleDrawerOpen={handleDrawerOpen}
        isDrawerOpen={props.drawer.isOpen}
      />
      <DrawerLeft
        open={props.drawer.isOpen}
        handleDrawerClose={handleDrawerClose}
      />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: props.drawer.isOpen,
        })}
      >
        <div>{props.children}</div>
      </main>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    authenticated: state.authenticated,
    login: state.login,
    drawer: state.drawer,
  };
};

const MainPage = connect<
  {
    authenticated: AuthenticatedInterface;
    login: LoginInterface;
    drawer: DrawerInterface;
  },
  {
    drawerAction: (drawer: boolean) => (dispatch: Dispatch<AnyAction>) => any;
  },
  {},
  StoreState
>(mapStateToProps, { drawerAction })(_MainPage);

export default MainPage;
