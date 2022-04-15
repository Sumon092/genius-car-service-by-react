import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [agree, setAgree] = useState(false);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
    }
    if (user) {
        console.log('user', user)
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')


    }
    return (
        <div className='container w-50 mx-auto mt-3'>
            <h2 className='text-primary text-center'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={() => setAgree(!agree)} label="Accept terms and condition" className={`ps-2 ${agree ? '' : 'text-danger'}`} />
                </Form.Group>
                <Button
                    disabled={!agree}
                    className='w-50 mx-auto d-block mb-3' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an account ? <Link to='/login' className='text-decoration-none' onClick={navigateToLogin} >Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;