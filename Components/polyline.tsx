import React, {useState} from "react";
import Image from "next/image";
import busIcon from "../assets/bus_icon.png";
import {InfoWindow, Polyline} from "@react-google-maps/api";
import bikeIcon from "../assets/bike_icon.svg";

export default function PolyLine ({step}) {
    const [showLegInfo, setShowLegInfo] = useState(false);
    let options: google.maps.PolylineOptions;
    if (step.travel_mode == "bicycling") {
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
    } else {
        options = {
            strokeColor: "#009dff",
            strokeOpacity: 1,
            strokeWeight: 7,
        }
    }

    const getTransitDetails = (details): JSX.Element => {
        return <>
            <Image width='17%' height='17%' layout='fixed' src={busIcon}/>
            <span> <b style={{background: "#00aff2"}}>  {details.line.short_name}</b></span>
            {/* <br/>
            <span><b>{details.departure_time.text}</b> {details.departure_stop.name}</span>
            <br/>
            <span><b>{details.arrival_time.text}</b> {details.arrival_stop.name}</span> */}
        </>
    }


    return <React.Fragment key={step.polyline}>
        {/*TODO: extract each polyline into a single comopnent, each one will have their showLegInfo hook*/}
        {showLegInfo &&
            <InfoWindow
                position={step.start_location}
            >
                <div>
                    <p>
                        <b>{step.duration.text} </b>
                        {step.transit_details != undefined ? getTransitDetails(step.transit_details) :
                            <Image width='17%' height='17%' layout='fixed' src={bikeIcon}/>}
                    </p>
                </div>
            </InfoWindow>
        }
        <Polyline
            path={google.maps.geometry.encoding.decodePath(step.polyline)}
            options={options}
            onClick={() => setShowLegInfo(!showLegInfo)}
        />

    </React.Fragment>
}