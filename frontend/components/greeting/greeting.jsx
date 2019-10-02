import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
  
  const newLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('signup')}>Sign up</button>
      <button onClick={() => openModal('login')}>Log in</button>
    </nav>
  );

  const personalGreeting = () => (
      <button className="logout-button" onClick={logout}>Log Out</button>
  );

  return (
    currentUser ? personalGreeting(currentUser, logout) : newLinks()
  )
}


export default Greeting;