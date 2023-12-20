import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const RegisterButton = () => {
    const { loginWithRedirect, isAuthenticated} = useAuth0();

    return (
        !isAuthenticated && (
            <button 
                onClick={() => 
                    loginWithRedirect({
                        authorizationParams: {
                            screen_hint: 'signup'
                        }
                    })
                }
            >
                Register
            </button>
        )
    );
};

export default RegisterButton;