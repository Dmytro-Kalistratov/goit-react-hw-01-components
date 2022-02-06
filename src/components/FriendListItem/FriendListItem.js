import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export default function FriendsListItem(props) {
  const { avatar, name, isOnline } = props;
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={
          isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
