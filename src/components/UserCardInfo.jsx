/* eslint-disable react/prop-types */
// The upper line is to avoid the linter warning about the props not being destructured
function UserCardInfo(props) {
    // Now we are doing it like this, but destructuring is a cleaner way to do it
    const name = props.user.name;
    const lastname = props.user.lastname;
    const age = props.user.age;
    const email = props.user.email;
    const role = props.user.role;

    return (
        <div>
            <h3>{name}</h3>
            <h4>{lastname}</h4>
            <p>{age}</p>
            <p>{role}</p>
            <p>{email}</p>
        </div>
    )
}

// Remember to export the component:
export default UserCardInfo;