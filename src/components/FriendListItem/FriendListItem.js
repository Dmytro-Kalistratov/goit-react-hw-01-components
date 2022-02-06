import './FriendListItem.css';
import PropTypes from 'prop-types';

export default function FriendsListItem(props) {
  const { avatar, name, isOnline } = props;
  return (
    <li className="item">
      <span
        className="status"
        style={
          isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
