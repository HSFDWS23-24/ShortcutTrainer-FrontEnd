import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const ProfileButton = (props) => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button onClick={props.onClick}>
                {user.name}
            </button>
        )
    )
}

export default ProfileButton