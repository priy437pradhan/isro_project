import PropTypes from 'prop-types';

function SingleCard({ name, Place, State }) {
  return (
    <div className="card">
      <h5 className="card-title">{name}</h5>
      <h4 className="card-place">{Place}</h4>
      <h2 className="card-state">{State}</h2>
    </div>
  );
}

SingleCard.propTypes = {
  name: PropTypes.string.isRequired,
  Place: PropTypes.string.isRequired,
  State: PropTypes.string.isRequired,
};

export default SingleCard;
