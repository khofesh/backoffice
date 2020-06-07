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
  TempDrawerInterface,
} from "../actions/interfaces";
import { drawerAction, tempDrawerAction } from "../actions/navigations/drawer";
import { logoutAction } from "../actions/auth/logout";

/* components */
import TopBar from "../components/navigations/TopBar";
import DrawerLeft from "../components/navigations/DrawerLeft";
import TempDrawer from "../components/navigations/TempDrawer";
import { Footer } from "../components/navigations/Footer";

/* styles */
import { contentStyles } from "../assets/styles/content";

interface MainPageProps {
  authenticated: AuthenticatedInterface;
  login: LoginInterface;
  drawer: DrawerInterface;
  drawerAction(drawer: boolean): any;
  tempdrawer: TempDrawerInterface;
  tempDrawerAction(drawer: boolean): any;
  logoutAction(): any;
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

  const handleTempDrawerOpen = () => {
    props.tempDrawerAction(true);
  };

  const handleTempDrawerClose = () => {
    props.tempDrawerAction(false);
  };

  const handleLogout = () => {
    props.logoutAction();
  };

  React.useEffect(() => {
    console.log("login data", props.login);
  }, [props]);

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
        handleTempDrawerOpen={handleTempDrawerOpen}
        handleLogout={handleLogout}
      />
      <DrawerLeft
        open={props.drawer.isOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <TempDrawer
        open={props.tempdrawer.isOpen}
        handleDrawerClose={handleTempDrawerClose}
      />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: props.drawer.isOpen,
        })}
      >
        <div>
          {!props.authenticated.status && !props.login.access_token ? (
            <Redirect to="/login" noThrow />
          ) : (
            props.children
          )}
        </div>
      </main>

      <Footer drawer={props.drawer} />
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    authenticated: state.authenticated,
    login: state.login,
    drawer: state.drawer,
    tempdrawer: state.tempdrawer,
  };
};

const MainPage = connect<
  {
    authenticated: AuthenticatedInterface;
    login: LoginInterface;
    drawer: DrawerInterface;
    tempdrawer: TempDrawerInterface;
  },
  {
    drawerAction: (drawer: boolean) => (dispatch: Dispatch<AnyAction>) => any;
    tempDrawerAction: (
      drawer: boolean
    ) => (dispatch: Dispatch<AnyAction>) => any;
    logoutAction: () => (dispatch: Dispatch<AnyAction>) => any;
  },
  {},
  StoreState
>(mapStateToProps, { drawerAction, tempDrawerAction, logoutAction })(_MainPage);

export default MainPage;
