import Modal from 'react-modal';
import {GetServerSideProps, GetServerSidePropsContext} from "next";
import {useRouter} from "next/router";
import {useDirection} from "../hooks/useDirection";
import {useState} from "react";

Modal.setAppElement('#__next');

export default function Addresses({addresses}: {addresses: string[]}) {
    const [savedAddresses, setSavedAddresses] = useState(addresses);
    const router = useRouter();
    const {originBoxRef, destinationBoxRef} = useDirection();
    return (
        <div>
            <Modal
                contentLabel="Saved Addresses"
                isOpen={true}
                onRequestClose={() => router.push('/')}
            >
                <div className="modalDiv">
                    {savedAddresses.map((address) => (
                        <div className="addressRow" key={address}>
                            <p>{address}</p>
                            <button onClick={()=>{originBoxRef.current.value=address}}>Set as Origin</button>
                            <button onClick={()=>{destinationBoxRef.current.value=address}}>Set as Destination</button>
                        </div>
                    ))}
                    <form onSubmit={
                        async (e) => {
                            e.preventDefault();
                            const address = e.target[0].value;
                            try{
                                const res = await fetch('http://localhost:3001/addresses',
                                    {
                                        method: 'POST',
                                        credentials: 'include',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({address})
                                    },
                                );
                            }catch (e) {
                                console.log(e);
                            }
                            setSavedAddresses(savedAddresses.concat(address));
                        }
                    }>
                        <input type="text" placeholder="New Address"/>
                        <button type="submit">Add</button>
                    </form>

                </div>
            </Modal>
            <style jsx>{`
                .addressRow {
                    display: flex;
                    flex-direction: row;
                    //margin: 0 auto;
                }
            `}</style>
        </div>

    )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const sIdCookie = context.req.headers.cookie;

    const res = await fetch('http://localhost:3001/addresses', {
        method: 'GET',
        credentials: 'include',
        headers: {
            cookie: sIdCookie
        }
    });

    const addresses = (await res.json()).map(obj=>{
        return obj.address;
    })


    return {
        props: {addresses},
    }
}