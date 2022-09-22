import type {NextPage} from 'next';
import Map from '../Components/map';
import TripInfoWindow from "../Components/tripInfoWindow";
import React from "react";


const Home: NextPage = () => {
    return (<>
        <Map/>
        <TripInfoWindow/>
    </>)
}


export default Home;
