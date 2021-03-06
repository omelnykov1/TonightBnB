import { connect } from 'react-redux';
import { fetchSpot, createSpot, updateSpot, fetchReviews} from '../../../actions/spot_actions';
import Spot from './spot';

const mSTP = (state, ownProps) => ({
  spot: state.entities.spots[ownProps.match.params.spotId],
})

const mDTP = dispatch => ({
  fetchSpot: spotId => dispatch(fetchSpot(spotId)),
  createSpot: spot => dispatch(createSpot(spot)),
  fetchReviews: id => dispatch(fetchReviews(id)),
  updateSpot: spot => dispatch(updateSpot(spot)),
})

export default connect(mSTP, mDTP)(Spot);