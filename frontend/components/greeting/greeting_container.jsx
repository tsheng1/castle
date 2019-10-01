import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';

const msp = state => {
  return { currentUser: state.entities.users[state.session.id] } || {}
}

const mdp = dispatch => ({
  logout: formUser => dispatch(logout(formUser))
});

export default connect(msp, mdp)(Greeting);