import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.first_name}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
      <div>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
      </div>
    );

  return (
    <header>
      <div>
        {display}
      </div>
    </header>
  )
}