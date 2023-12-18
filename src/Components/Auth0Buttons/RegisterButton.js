import { useAuth0 } from '@auth0/auth0-react';

const RegisterButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button onClick={() => loginWithRedirect()}>
                Register
            </button>
        )
    )
}

export default RegisterButton