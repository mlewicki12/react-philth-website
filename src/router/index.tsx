
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          Hello world!
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;