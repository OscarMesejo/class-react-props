/* eslint-disable react/prop-types */
import "./UserCard.css"
import UserCardInfo from "./UserCardInfo";

function UserCard(props) {
    // In this component we only need the avatar, so we destructure it from the user object:
    const { avatar } = props.user;
    // This is the same as props.user.avatar, and we can also get the rest of the info like this .....
    return (
        <div className="user-card">
            <img src={avatar} alt="User profile img" />
            {/* 
            We pass the user object as a prop to the UserCardInfo component:
             */}
            <UserCardInfo user={props.user}/>
        </div>
    )
}

// Remember to export the component:
export default UserCard;