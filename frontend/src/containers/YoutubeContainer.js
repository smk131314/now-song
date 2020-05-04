import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getVideo } from '../actions/actions';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';

function mapStateToProps (state) {
  return {
    video: state.video
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer)