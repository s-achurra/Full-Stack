import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <section className="navButtons">
    <Link to="/login" className="navText" >Log in</Link>
    <Link to="/signup" className="button" >Sign up!</Link>
  </section>
);

const personalGreeting = (currentUser, logout) => (
  <section className="navButtons">
    <h2 className="navText">Hello, {currentUser.username}!</h2>
    <button onClick={logout}  className="button" >Log Out</button>
	</section>
);

const Greeting = ({ currentUser, logout }) => {
  return (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);};

export default Greeting;
