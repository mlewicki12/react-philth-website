
import { useHistory } from "react-router-dom";
import { useFirebase } from "../../firebase";

import * as Routes from '../../constants/routes';

const SignIn = () => {
  const firebase = useFirebase();
  const history = useHistory();

  const handleSignIn = () => {
    if(!firebase) {
      return;
    }

    firebase?.signIn()
      .then(result => {
        debugger;
        history.push(Routes.ADMIN);
      })
      .catch(({code, message}) => {
        console.error(`[${code}]: ${message}`);
      });
  }

  return (
    <button onClick={handleSignIn}>
      Sign in with Google
    </button>
  )
}

export default SignIn;