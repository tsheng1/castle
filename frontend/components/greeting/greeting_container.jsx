import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';
import { Link, withRouter } from 'react-router-dom';

const msp = state => {
  return { currentUser: state.entities.users[state.session.id] } || {}
}

const mdp = dispatch => ({
  logout: formUser => dispatch(logout(formUser)),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(msp, mdp)(Greeting));