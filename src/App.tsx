
import { useState, useEffect } from 'react';
import FirebaseGlobal from 'firebase';
import Router from './router';

import './App.scss';
import { useFirebase, UserContext } from './firebase';

const App = () => {
  const [user, setUser] = useState<FirebaseGlobal.User | null>(null);

  const firebase = useFirebase();

  useEffect(() => {
    const listener = firebase?.auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => {
      listener && listener();
    }
  }, [firebase]); // this should never change, but just in case

  return (
    <div className='app-root'>
      <UserContext.Provider value={user}>
        <Router />
      </UserContext.Provider>
    </div>
  );
}

export default App;
