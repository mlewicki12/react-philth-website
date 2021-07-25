
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router: React.FC<any> = ({
  children
}) => {
  return (
    <div className='app-root'>
      <BrowserRouter>
        {children}

        <div className='app-content'>
          <Switch>
            <Route exact path='/'>
              Hello world!
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Router;