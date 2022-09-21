/// <reference types="@types/google.maps" />
import {
    createContext,
    ReactNode,
    useContext,
    useState,
} from "react";

export type multimodalDirection = {
    steps: step[];
    duration: google.maps.Duration;
    biking_distance: google.maps.Distance;
    departure_time: google.maps.Duration;
    arrival_time: google.maps.Duration;
};

type step = {
    distance: google.maps.Distance;
    duration: google.maps.Duration;
    polyline: string;
    start_location: google.maps.LatLngLiteral;
    end_location: google.maps.LatLngLiteral;
    start_address: string,
    end_address: string,
    travel_mode: google.maps.TravelMode;
    transit_details?: google.maps.TransitDetails
};

const UseDirection = createContext(null);


export const DirectionProvider = ({children}: {children: ReactNode}) => {
    const [directions, setDirections] = useState(null);

    return (
        <UseDirection.Provider value={{directions, setDirections}}>
            {children}
        </UseDirection.Provider>
    );
}

export function useDirection() {
    return useContext(UseDirection);
}
