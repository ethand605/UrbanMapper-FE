import { useEffect } from 'react';
import Router from 'next/router';
import useSWR from 'swr';



export default function useAddresses() {
    const { data: addresses, mutate: mutateAddresses } = useSWR<string[]>('http://localhost:3001/addresses', url => {
        return fetch(url,{
            credentials: 'include',
            method: 'GET',
        })
            .then(r => r.json())
            .then(json => json.map(obj=>obj.address))
    });

    useEffect(() => {
        console.log('useAddresses', addresses);
        if (!addresses) return ;
    }, [addresses]);

    return { addresses, mutateAddresses };
}
