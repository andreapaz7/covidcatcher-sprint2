import React, { useState } from 'react';
import { GoogleButton } from './GoogleButton';
import { Quest } from './Quest';
import { Socket } from './Socket';

export function Login() {
  const [loggedIn, setLoggedIn] = useState([]);

  function newUser() {
    React.useEffect(() => {
      Socket.on('new user', (data) => {
        setLoggedIn(data.login);
      });
      return () => Socket.off('new user');
    });
  }

  newUser();

  if (loggedIn === 1) {
    return (
      <div>
        <Quest />
      </div>
    );
  }

  return (
    <div>
      <h1>Please Login with Google</h1>
      <GoogleButton />
    </div>
  );
}
