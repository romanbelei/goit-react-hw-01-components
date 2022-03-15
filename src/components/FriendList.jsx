import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
    return (
        <ul>
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem 
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            )
            )} 
        </ul>
    )
}

    
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isonline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
),
};

export default FriendList;