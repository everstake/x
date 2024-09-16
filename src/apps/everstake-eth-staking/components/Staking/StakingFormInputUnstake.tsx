import PropTypes from 'prop-types';

interface StakingFormInputUnstakeProps {
  className?: string;
}

export const StakingFormInputUnstake: React.FC<StakingFormInputUnstakeProps> = ({ className }) => {
  return (
  <p>unstake input</p>
  );
};

StakingFormInputUnstake.propTypes = {
  className: PropTypes.string,
};