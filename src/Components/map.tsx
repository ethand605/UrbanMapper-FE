import {GoogleMap} from "@react-google-maps/api";
import React, {useState} from "react";
import OverviewPolyline from "./polylines";

const containerStyle = {
    Position: "absolute",
    height: "90vh",
    width: "100vw",
    zIndex: "0",
};

const center = {
    lat: 33.67348409529896,
    lng: -117.795852740205,
}; //TODO: set this to home address later on

const Map = () => {
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
            <OverviewPolyline/>
        </GoogleMap>
    </div>
    );
}

export default Map;
