import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className='links'>
        <Link to='/'>Home</Link>
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