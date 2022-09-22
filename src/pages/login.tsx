import React, { useState } from 'react';
import useUser from '../hooks/useUser';
import Layout from '../Components/layout';
import Form from '../Components/form';


export default function Login() {
    const { mutateUser } = useUser();

    const [errorMsg, setErrorMsg] = useState('');

    return (
            <div className="login">
                <Form
                    errorMessage={errorMsg}
                    onSubmit={async function handleSubmit(event) {
                        event.preventDefault();

                        const body = {
                            username: event.currentTarget.username.value,
                            password: event.currentTarget.password.value,
                        };
                        try {
                            await mutateUser((await fetch('http://localhost:3001/auth/login', {
                                credentials: 'include',
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(body),
                            })).json());
                        } catch (error) {
                            console.log(error);
                            setErrorMsg(error.data.message);
                        }
                    }}
                />
                <style jsx>{`
                    .login {
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



