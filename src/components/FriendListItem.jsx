import PropTypes from "prop-types";

const FriendListItem = ({
        avatar,
        name,
        isOnline,
}) => {
    return (
        <li class="item">
            <span class="status">isOnline: {isOnline}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    ); 
};

FriendListItem.propTypes = {
    vatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.string,
}

export default FriendListItem;