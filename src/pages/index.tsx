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

//todo: use ssg here to fetch stored addresses and put it in layout with props or make all addresses a context

export default Home;
