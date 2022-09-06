import {GoogleMap} from "@react-google-maps/api";
import React, {useState} from "react";
import Polylines from "./polylines";

const containerStyle = {
    Position: "absolute",
    height: "100vh",
    zIndex: "0",
};

const center = {
    lat: 33.67348409529896,
    lng: -117.795852740205,
}; //TODO: set this to home address later on

function Map({directions}) {
    const [map, setMap] = useState(null);

    return (
        <div>
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
            {/*TODO: place a marker at the start and end*/}
            <Polylines directions={directions}/>
        </GoogleMap>
    </div>
    );
}

export default Map;