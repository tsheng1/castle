import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    formType: 'Sign up',
    navLink: <Link to="/login">Log In</Link>,
    errors: errors.session,
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

export default connect(msp, mdp)(SessionForm);
