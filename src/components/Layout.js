import { Outlet, Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
  return (
    <>
      <nav>
        
            <Link className="Link" to="/">Home</Link>
            <Link className="Link" to="/hairdressing">Stylizacje</Link>
            <Link className="Link" to="/calendar">Terminarz</Link>
            <Link className="Link" to="/contact">Kontakt</Link>
            
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
