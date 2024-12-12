import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="mx-auto">
            <button onClick={handleGoogleSignIn} className="btn">Google</button>
            <div className="divider">OR</div>
        </div>
    );
};

export default SocialLogin;