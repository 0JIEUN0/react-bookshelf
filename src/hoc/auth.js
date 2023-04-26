import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';

export default function (SpecificComponent, option, adminRoute = null) {

    /* 
    * option: null(: anyone) / true(: login user) / false (not-login user)
    * adminRoute: true(: admin only)
    */

    function AuthenticationCheck(props) {
        const navigate = useNavigate();
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth()).then(response => {
                console.log(response)
                if (!response.payload.isAuth) {
                    if (option) {
                        navigate('/');
                    }
                } else {
                    if (adminRoute && !response.payload.isAdmin) {
                        navigate('/library');
                    } else {
                        if (option === false)
                            navigate('/library');
                    }
                }
            }).catch(error => { // authentication false
                if (option) navigate('/');
            })
        }, [])
        
        return (
            <SpecificComponent />
        )
    }

    return AuthenticationCheck;
}
