import React, {useState} from "react";
import {Polyline, InfoWindow} from "@react-google-maps/api";

const busIconStyle = {
    maxHeight: "6%",
    maxWidth : "6%",
}

export default function Polylines({directions}) {
    const [showLegInfo, setShowLegInfo] = useState(false);
    const polylines: JSX.Element[] = directions.routes[0].legs[0].steps.map(step => {
        let options: google.maps.PolylineOptions;
        if (step.travel_mode == "WALKING") {
            options = {
                strokeColor: "#036aab",
                strokeOpacity: 0,
                strokeWeight: 6,
                icons: [
                    {
                        icon: {
                            path: "M 0,1.2 0,1",
                            strokeOpacity: 1,
                            scale: 4,
                        },
                        offset: "0",
                        repeat: "9px",
                    },
                ],
            }
        }else{
            options = {
                strokeColor: "#009dff",
                strokeOpacity: 1,
                strokeWeight: 7,
            }
        }

        const getTransitDetails = (details): JSX.Element => {
            return <p>
                <img style={busIconStyle} src="https://maps.gstatic.com/mapfiles/place_api/icons/v2/bus_share_taxi_pinlet.svg"/>
                <span>     <b style={{background: "#00aff2"}}>  {details.line.short_name} </b> - {details.line.name} - {details.line.headsign}</span>
                <br/>
                <span>{details.departure_time.text} {details.departure_stop.name}</span>
                <br/>
                <span>{details.arrival_time.text} {details.arrival_stop.name}</span>
            </p>
        }

        return <React.Fragment key={step.polyline.points}>
            {/*TODO: extract each polyline into a single comopnent, each one will have their showLegInfo hook*/}
            {showLegInfo &&
                <InfoWindow
                    position={step.start_location}
                >
                    <div>
                        <p>{step.html_instructions} <br/><b>{step.duration.text}</b></p>
                        {step.transit_details &&
                            <>
                                {getTransitDetails(step.transit_details)}
                            </>
                        }
                    </div>
                </InfoWindow>
            }
            <Polyline
                path={google.maps.geometry.encoding.decodePath(step.polyline.points)}
                options={options}
                onClick={() => setShowLegInfo(!showLegInfo)}
            />

        </React.Fragment>
    });

    return <>{polylines}</>;
}