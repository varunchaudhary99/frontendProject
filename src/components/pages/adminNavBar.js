import { Link, Outlet } from 'react-router-dom';

function AdminNavBar() {
  return (
    <div>
      <header className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img
              src={require('../../assets/logo1.png')}
              className="logo"
              alt="InsuranceDekho"
              style={{ width: '200px', height: 'auto' }}
            />
          </Link>
          <nav className="menu">
            <Link className="nav-link" to="/adminCar">Car </Link>
            <Link className="nav-link" to="/adminBike">Bike </Link>
            <Link className="nav-link" to="/adminHealth">Health</Link>
            <Link className="nav-link" to="/adminTrem">Term</Link>
            <Link className="nav-link" to="/adminBusiness">Business</Link>
            <Link className="nav-link" to="/adminFamily">Family</Link>
            <Link className="nav-link" to="/adminGranteee">Guaranteed</Link>
          </nav>
        </div>
      </header>

      <Outlet />
    </div>
  );
}

export default AdminNavBar;
