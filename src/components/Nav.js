import { NavLink } from 'react-router-dom';

const Nav = () => {
  const activeStyle = { color: 'orange' };
  return (
    <nav className="nav">
      <NavLink to="/" exact activeStyle={activeStyle}>
        Home
      </NavLink>
      {' | '}
      <NavLink to="/todo" activeStyle={activeStyle}>
        Todo list
      </NavLink>
      {' | '}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Nav;
