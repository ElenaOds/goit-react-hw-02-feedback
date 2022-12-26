import propTypes from 'prop-types';
import {Message} from './Notification.styled';

const Notification = ( { message }) => <Message>{message}</Message>;

Notification.propTypes = {
    message: propTypes.string.isRequired,
  };

  export default Notification;