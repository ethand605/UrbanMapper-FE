import type {NextPage} from 'next';
import Map from '../Components/map';
import TripInfoWindow from "../Components/tripInfoWindow";
import React from "react";
import Modal from 'react-modal';


const Home: NextPage = () => {
    return (<>
        <Map/>
        <TripInfoWindow/>
    </>)
}

export default Home;
