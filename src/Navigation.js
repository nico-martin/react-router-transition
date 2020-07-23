import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => <nav {...props}>
  <NavLink
    to="/"
    activeClassName="active"
    exact
  >
    Home
  </NavLink>
  {[1, 2, 3].map(i =>
    <NavLink
      to={`/page/${i}/`}
      key={i}
      activeClassName="active"
    >
      Page {i}
    </NavLink>,
  )}
</nav>;

export default Navigation;
