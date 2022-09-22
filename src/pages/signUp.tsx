import React, { useState } from 'react';
import useUser from '../hooks/useUser';
import Form from '../Components/form';


export default function SignUp() {
    const { mutateUser } = useUser();

    const [errorMsg, setErrorMsg] = useState('');

    return (
        <div className="signup">
            <Form
                errorMessage={errorMsg}
                type={'Sign Up'}
                onSubmit={async function handleSubmit(event) {
                    event.preventDefault();

                    const body = {
                        username: event.currentTarget.username.value,
                        password: event.currentTarget.password.value,
                    };
                    try {
                        const respUser = await fetch('http://localhost:3001/auth/signup', {
                            credentials: 'include',
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(body)
                        })

                        const respUserJson = await respUser.json();
                        if (respUser.status === 201) {
                            await mutateUser(respUserJson);
                        }else{
                            setErrorMsg(respUserJson.msg);
                        }
                    } catch (error) {
                        setErrorMsg(error.data.message);
                    }
                }}
            />
            <style jsx>{`
                    .signup {
                      max-width: 21rem;
                      margin-left: auto;
                      margin-right: auto;
                      margin-top: 20vh;
                      padding: 1rem;
                      border: 1px solid #ccc;
                      border-radius: 4px;
                    }                
            `}</style>
        </div>


    )
}



