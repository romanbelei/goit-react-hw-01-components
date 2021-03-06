import PropTypes from "prop-types";
import s from "./FriendListItem.module.css"

const FriendListItem = ({
        avatar,
        name,
        isOnline,
}) => {
    return (
        <li  className={s.item}>
            <span className={isOnline ? s['online'] :  s['Offline']}></span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    );
    
};

FriendListItem.propTypes = {
    vatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

export default FriendListItem;