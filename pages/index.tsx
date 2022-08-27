import type {NextPage} from 'next';
import Map from '../Components/map';
import TripInfoWindow from "../Components/tripInfoWindow";
import React from "react";
import {StandaloneSearchBox} from "@react-google-maps/api";

const Home: NextPage = () => {
    return (
        <div>
            <Map/>
            {/*use redux to pass in the steps here*/}
            <TripInfoWindow/>


        </div>
    )

}

export default Home;
