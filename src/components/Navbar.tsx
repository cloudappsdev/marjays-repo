import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="classy"
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}
        >
          <Link to="/home" className="whitey">Home / About</Link>
          <Link to="/bios">Contact Info / Bios</Link>
          <Link to="/shows">Shows</Link>
          <Link to="/samplers">Music Samples</Link>
          <Link to="/video">Video Clips</Link>
        </nav>
    );
}

export default Navbar