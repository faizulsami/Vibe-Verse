import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';

const SocialLogin = () => {
    const currentTime = new Date();
    const { googlePopup } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        const isAdmin= false;
        const followers = {};
        const following={};
        const createAt = currentTime.toISOString();
        const updateAt =currentTime.toISOString()

        googlePopup()
            .then((result) => {
                const loggedInUser = result.user;
        
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email ,photo:loggedInUser.photoURL,isAdmin,followers,following ,createAt,updateAt}
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch((error) => {
                console.log("error", error.message);
            });
    }
    return (
        <div>
            <div className="divider w-80 mx-auto">OR</div>
            <button className='mx-44 py-3' onClick={handleGoogleLogin}>
                <FcGoogle size={30} />
            </button>
        </div>
    );
};

export default SocialLogin;