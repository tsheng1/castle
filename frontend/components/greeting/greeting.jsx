import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.newLinks = this.newLinks.bind(this);
    this.personalGreeting = this.personalGreeting.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.redirectBookings = this.redirectBookings.bind(this);
  }
  
  redirectBookings() {
    this.props.history.replace('/bookings')
  }

  newLinks() {
    return (
      <nav className="login-signup">
        <button onClick={() => this.props.openModal('signup')}>Sign up</button>
        <button onClick={() => this.props.openModal('login')}>Log in</button>
      </nav>
    )
  };

  personalGreeting() {
    return (
      <div className="dropdown-container">
        <div className="profile-pic-container"></div>
        <button onClick={this.toggleClass} className="drop-button"><img src={window.pawn} className="profile-pic"/></button>
        
        <div id="user-dropdown" className="dropdown-content">
          <button className="bookings-button" onClick={this.redirectBookings}>Bookings</button>
          <button className="logout-button" onClick={this.props.logout}>Log Out</button>
        </div>
      </div>
    )
  };

  toggleClass() {
    document.getElementById("user-dropdown").classList.toggle("show-user-dropdown");
  }

  handleClick (e) {
    if (!e.target.matches('drop-button')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show-user-dropdown')) {
          openDropdown.classList.remove('show-user-dropdown')
        }
      }
    }
  }

  render() {
    return (
      this.props.currentUser ? this.personalGreeting(this.props.currentUser, this.props.logout) : this.newLinks()
    )
  }
}


export default withRouter(Greeting);