import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions'

const msp = ({ errors }) => {
  return {
    formType: 'Sign up',
    errors: errors.session,
  };
};

const mdp = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    processForm: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    buttonForm: (
      <button className="redirect-button" onClick={() => dispatch(openModal('login'))} >
        Log in
      </button>
    )
  };
};

export default connect(msp, mdp)(SessionForm);
