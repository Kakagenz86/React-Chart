import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div style={{display: 'flex', gap: '20px', color: 'black', textDecoration: 'none'}}>
            <Link to={'/'}>Basic</Link>
            <Link to={'/line'}>Line</Link>
            <Link to={'/bar'}>Bar</Link>
            <Link to={'/pie'}>Pie</Link>
        </div>
    );
}

export default Navbar;