import type {NextPage} from 'next';
import Map from '../Components/map';
import TripInfoWindow from "../Components/tripInfoWindow";
import React from "react";
import {useJsApiLoader} from "@react-google-maps/api";
import SearchBar from "../Components/searchBar";
import {DirectionProvider} from "../hooks/directionContext";


const Home: NextPage = () => {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ["geometry", "drawing", "places"]
    });

    return (
        !isLoaded ? <div>Loading...</div> :
        <DirectionProvider>
            <Map/>
            <TripInfoWindow/>
            <SearchBar/>
        </DirectionProvider>
    )
}

export default Home;
