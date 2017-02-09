import { connect } from 'react-redux';
import NavRoot from './NavRoot';
import { push, pop } from './NavActions';

function mapStateToProps(state) {
  return {
    navigation: state.navReducer,
  };
}

export default connect(
  mapStateToProps,
  {
    pushRoute: route => push(route),
    popRoute: () => pop(),
  },
)(NavRoot);
