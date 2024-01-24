import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './Profile.css';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    if(!isAuthenticated) {
        return <div>Zugriff verweigert</div>;
    }

    return (
        isAuthenticated && (
            <div className="window">
                <article className="Content">
                    {user?.picture && <img className="image" src={user.picture} alt={user?.name} />}
                    <br></br>
                    <h2>{user?.name}</h2>
                    <br></br>
                    <ul>
                        {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]}</li>)}
                    </ul>
                </article>
            </div>
            
        )
    );
};

export default Profile