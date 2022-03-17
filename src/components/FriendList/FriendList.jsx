import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
    return (
        <ul>
            {friends.map(friend => (
                    <FriendListItem 
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
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
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
),
};

export default FriendList;