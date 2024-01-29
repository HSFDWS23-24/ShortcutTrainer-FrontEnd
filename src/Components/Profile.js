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
                    <div className = "img">
                    {user?.picture && <img src={user.picture} alt={user?.name} />}
                    </div>
                    
                    <h2>{user?.name}</h2>
                    <div className = "info">
                        <h3>E-Mail: {user?.email}</h3>
                        <h3>Username: {user?.nickname}</h3>
                    </div>
                    
                    <ul>
                     {/*  {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]}</li>)} */}
                    </ul>
                </article>
            </div>
            
        )
    );
};

export default Profile