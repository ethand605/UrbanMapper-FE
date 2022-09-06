import {GoogleMap} from "@react-google-maps/api";
import React, {useState} from "react";
import Polylines from "./polylines";

const containerStyle = {
    Position: "absolute",
    // width: "100%",
    height: "100vh",
    zIndex: "0",
};

const center = {
    lat: 33.67348409529896,
    lng: -117.795852740205,
}; //TODO: set this to home address later on

function Map({directions}) {
    // const {isLoaded, loadError} = useJsApiLoader({
    //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    //     libraries: ["geometry", "drawing", "places"]
    // });
    const [map, setMap] = useState(null);
    const [originSearchBox, setOriginSearchBox] = useState(null);



    //extract this into a separate component if wish to use google.map  https://www.npmjs.com/package/@react-google-maps/api#:~:text=If%20you%20want%20to%20use%20window.google%20object%2C%20you%20need%20to%20extract%20GoogleMap%20in%20separate%20module%2C%20so%20it%20is%20lazy%20executed%20then%20google%2Dmaps%2Dapi%20script%20is%20loaded%20and%20executed%20by%20%3CLoadScript%20/%3E.%20If%20you%20try%20to%20use%20window.google%20before%20it%20is%20loaded%20it%20will%20be%20undefined%20and%20you%27ll%20get%20a%20TypeError.
    // const renderMap = () => {
    //     return (isLoaded ?
    //
    //             :
    //             <p>loading...</p>
    //     );
    // };

    // return loadError ? <>error: {loadError}</> : renderMap();
    return (<div style={{
        // display: "flex",
        // position: "relative",
        // flexDirection: "column",
        alignItems: "center",
    }}>
        <GoogleMap
            options={{
                mapTypeControlOptions: {position: google.maps.ControlPosition.BOTTOM_RIGHT},
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
            }}
            mapContainerStyle={containerStyle}
            center={center}
            onLoad={map => setMap(map)}
            zoom={14}>
            <Polylines directions={directions}/>
        </GoogleMap>

    </div>);
}

export default Map;
