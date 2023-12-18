import { useAuth0 } from '@auth0/auth0-react';

const RegisterButton = () => {
    const { registerWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button onClick={() => registerWithRedirect()}>
                Register
            </button>
        )
    )
}

export default RegisterButton