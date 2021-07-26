
import { Link } from "react-router-dom";
import './style.scss';

const Navigation = () => {
  return (
    <nav>
      <Link to='/' id='logo'>
        Philth Zine
      </Link>
      <div className='links'>
        <Link to='/about'>About</Link>
        <Link to='/articles'>Articles</Link>
        <Link to='/reviews'>Reviews</Link>
        <Link to='/order'>Order Physical</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  );
}

export default Navigation;