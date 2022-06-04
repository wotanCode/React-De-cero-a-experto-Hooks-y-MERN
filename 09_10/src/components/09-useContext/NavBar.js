import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {

  return (

    <nav className="navbar navbar-expand-lg bg-dark">



      <div className="container-fluid">
        <Link className="navbar-brand" to="./">useContext</Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink activeClassName='active' className="nav-item nav-link" to='./'>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName='active' className="nav-item nav-link" to='./login'>Features</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName='active' className="nav-item nav-link" to='about'>Features</NavLink>
          </li>
        </ul>

      </div>
    </nav>
  )
}