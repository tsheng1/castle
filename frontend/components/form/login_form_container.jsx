import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import {openModal, closeModal} from '../../actions/modal_actions'

const msp = ({ errors }) => {
  return {
    formType: 'Log in',
    // navLink: <Link to="/signup">Sign Up</Link>,
    errors: errors.session
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    buttonForm: (
      <button className="redirect-button" onClick={() => dispatch(openModal('signup'))} >
         Sign up
      </button>
    )
  };
};

export default connect(msp, mdp)(SessionForm);
