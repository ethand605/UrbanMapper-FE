/// <reference types="@types/google.maps" />
import {
    Context,
    createContext, Dispatch,
    ReactNode,
    useContext,
} from "react";
import {useImmerReducer} from "use-immer";
import directionReducer from "../reducers/directions";

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


const DirectionContext: Context<multimodalDirection | undefined> = createContext(null);

//add type
const DirectionDispatchContext = createContext(null);

export const DirectionProvider = ({children}: {children: ReactNode}) => {
    //using Immer so the multiModalDirection object doesn't need to get modified field by field
    const [direction, dispatch] = useImmerReducer(directionReducer, null);

    return (
        <DirectionContext.Provider value={direction}>
            <DirectionDispatchContext.Provider value={dispatch}>
                {children}
            </DirectionDispatchContext.Provider>
        </DirectionContext.Provider>
    );
}

export function useDirection(): multimodalDirection {
    console.log(useContext(DirectionContext));
    return useContext(DirectionContext);
}

//add type
export function useDirectionDispatch() {
    return useContext(DirectionDispatchContext);
}