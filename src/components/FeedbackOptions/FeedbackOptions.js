import propTypes from 'prop-types';
import {Button} from './FeedbackOptions.styled';

const FeedbackOptions = ( {options, onLeaveFeedback} ) => {
    return options.map(option => (
        <Button type='button'
        key={option}
        onClick={() => onLeaveFeedback(option)}
        >
        {option}
        </Button>
    ))

};
FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string).isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
  };

export default FeedbackOptions;