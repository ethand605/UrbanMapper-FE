import type {NextPage} from 'next';
import Map from '../Components/map';
import TripInfoWindow from "../Components/tripInfoWindow";
import React from "react";
import {useJsApiLoader} from "@react-google-maps/api";
import SearchBar from "../Components/searchBar";
import {DirectionProvider} from "../hooks/useDirection";
import Layout from "../Components/layout";


const Home: NextPage = () => {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ["geometry", "drawing", "places"]
    });

    return (
        <DirectionProvider>
            {!isLoaded ? (<div>Loading...</div>) :
                (<Layout>
                    <Map/>
                    <TripInfoWindow/>
                </Layout>)
            }
        </DirectionProvider>
    )
}

//todo: use ssg here to fetch stored addresses and put it in layout with props or make all addresses a context

export default Home;
