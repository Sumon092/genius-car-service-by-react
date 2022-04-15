import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/checkout";

    if (user) {
        navigate(from, { replace: true });
    }
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email)
    }
    const navigateToRegister = event => {
        navigate('/register')
    }
    return (
        <div className='container w-50 mx-auto mt-3'>
            <h2 className='text-primary text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-50 mx-auto d-block mb-3' variant="primary" type="submit">
                    Log In
                </Button>
            </Form>

            <p>Forgot Password ? <Link to='' className='text-decoration-none' onClick={handleResetPassword} >Reset Password</Link></p>
            <p>New to Ginius Car ? <Link to='/register' className='text-decoration-none' onClick={navigateToRegister} >Please Register</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;