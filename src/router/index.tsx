
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/home';

import './style.scss';

const Router: React.FC<any> = ({
  children
}) => {
  return (
    <div className='app-root'>
      <BrowserRouter>
        {children}

        <div className='app-content'>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Router;