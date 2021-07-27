
import { Link } from "react-router-dom";
import * as Routes from '../../constants/routes';
import './style.scss';

const Navigation = () => {
  return (
    <nav>
      <Link to={Routes.HOME} id='logo'>
        Philth Zine
      </Link>
      <div className='links'>
        <Link to={Routes.ABOUT}>About</Link>
        <Link to={Routes.ARTICLES}>Articles</Link>
        <Link to={Routes.REVIEWS}>Reviews</Link>
        <Link to={Routes.ORDER}>Order Physical</Link>
        <Link to={Routes.CONTACT}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navigation;