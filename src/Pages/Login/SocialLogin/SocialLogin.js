import React from 'react';
import GoogleLogo from '../../../images/social/google.png'
import FacebookLogo from '../../../images/social/facebook.png'
import GithubLogo from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {
        errorElement = (
            <div>
                <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
            </div>
        );
    }
    if (user || user1) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{}} src={GoogleLogo} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <div
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={FacebookLogo} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </div>
                <div className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{}} src={GithubLogo} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;