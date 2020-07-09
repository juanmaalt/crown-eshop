import React from 'react';

import SignIn from '../../components/signIn/SignIn.component';
import SignUp from '../../components/signUp/SignUp.component';

import './SignPage.style.scss';

const SignPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>

)

export default SignPage;