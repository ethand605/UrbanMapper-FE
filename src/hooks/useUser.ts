import { useEffect } from 'react';
import Router from 'next/router';
import useSWR from 'swr';

type User = {
    user?: string
    isLoggedIn: boolean
};

export default function useUser() {
    const { data: user, mutate: mutateUser } = useSWR<User>('http://localhost:3001/auth/login', url => {
        return fetch(url,{
            credentials: 'include',
            method: 'GET',
        }).then(r => r.json())
    });
    useEffect(() => {
        // console.log('useUser', user);
        if (!user || (user && !user.isLoggedIn)) return ;

        if (user.isLoggedIn) {
            Router.push('/').then(() => console.log('redirected'));
        }
    }, [user])

    return { user, mutateUser };
}
