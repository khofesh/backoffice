import React, { FunctionComponent } from "react";
import { Link, Redirect } from "@reach/router";
import { connect } from "react-redux";
import { StoreState } from "../reducers";
import { AuthenticatedInterface } from "../actions/interfaces";
import TopBar from "../components/navigations/TopBar";

interface MainPageProps {
  authenticated: AuthenticatedInterface;
}

const _MainPage: FunctionComponent<MainPageProps> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

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

  console.log(props.authenticated);
  if (!props.authenticated.status) return <Redirect to="login" noThrow />;

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
      />
      <nav>
        <Link to="/">Home</Link> <Link to="login">Login</Link>
      </nav>
      <main></main>
      <div>{props.children}</div>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return { authenticated: state.authenticated };
};

const MainPage = connect<
  {
    authenticated: AuthenticatedInterface;
  },
  {},
  {},
  StoreState
>(
  mapStateToProps,
  {}
)(_MainPage);

export default MainPage;
