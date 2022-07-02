import { Outlet } from 'react-router';

import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav/AuthNav';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  return (
    <>
      <header style={styles.header}>
        <Navigation />
        <UserMenu />
        <AuthNav />
      </header>
      <Outlet />
    </>
  );
}
