import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {

  const user = useContext(UserContext);
  console.log('user', user);

  return (
    <div>

      <h1>HomeScreen</h1>
      <hr />

    </div>
  )
}