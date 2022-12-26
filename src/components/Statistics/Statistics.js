import propTypes from 'prop-types';
import {Name} from './Statistics.styled';

const Statistics = ( {good, neutral, bad, total, positivePercentage }) => (
    <div>
    <Name>Good: {good}</Name>
    <Name>Neutral: {neutral}</Name>
    <Name>Bad: {bad}</Name>
    <Name>Total: {total}</Name>
    <Name>Positive feedback: {positivePercentage} %</Name>
    </div>
);

Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    positivePercentage: propTypes.number.isRequired,
  };
  

export default Statistics;