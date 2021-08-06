
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navigation from '../components/navigation';
import SignUp from '../components/sign-in';
import * as Routes from '../constants/routes';
import { useUser } from '../firebase';
import Article from '../pages/article';

import Home from '../pages/home';
import styles from './style.module.scss';

const Router = () => {
  const user = useUser();

  return (
    <BrowserRouter>
      <Navigation />

      <div className={styles.content}>
        <Switch>
          <Route exact path={Routes.HOME} component={Home} />

          <Route path={Routes.LOGIN}>
            {!user
            ? <SignUp />
            : <Redirect to={Routes.HOME} />}
          </Route>

          <Route path={Routes.ADMIN}>
            {user
            ? <p>Hello {user.displayName}</p>
            : <p>Not logged in!</p>}
          </Route>

          <Route path={`${Routes.ARTICLES}/:slug`} component={Article} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;