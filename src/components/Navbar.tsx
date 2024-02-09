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
          <div className='anchor-wrapper'><Link to="/home" className="nav-anchor"><div>Home / About</div></Link></div>
          <div className='anchor-wrapper'><Link to="/bios" className="nav-anchor">Booking Info / Bios</Link></div>
          <div className='anchor-wrapper'><Link to="/shows" className="nav-anchor">Shows</Link></div>
          <div className='anchor-wrapper'><Link to="/photos" className="nav-anchor">Photos - Socials</Link></div>
          <div className='anchor-wrapper'><Link to="/music" className="nav-anchor">Music and Songs</Link></div>
          <div className='anchor-wrapper'><Link to="/video" className="nav-anchor">Video Clips</Link></div>
        </nav>
    );
}

export default Navbar