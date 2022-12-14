import React, {CSSProperties} from "react";
import busIcon from "../../assets/bus_icon.png";
import bikeIcon from "../../assets/bike_icon.svg";
import Image from "next/image";
import {useDirection} from "../hooks/useDirection";

const floatingPanelStyle = {
    position: "absolute",
    top: "10vh",
    backgroundColor: "#fff",
    zIndex: 10,
    margin: 0,
    padding: 10,
    width: "40vh",
    height: "90vh",
    border: "1px solid black",
}

export default function TripInfoWindow() {
    const {directions} = useDirection();

    if (!directions) {
        return;
    }
    let currentSeconds: number = directions.departure_time.value;
    const transitModeToIcon = new Map();
    transitModeToIcon.set('TRANSIT', busIcon);
    transitModeToIcon.set('bicycling', bikeIcon);

    function secondsToDatePST(seconds: number): string {
        const dateStringOptions = {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'America/Los_Angeles'
        };
        return new Date(seconds * 1000).toLocaleTimeString('en-US', dateStringOptions as Intl.DateTimeFormatOptions);
    }

    //TODO: display distance
    return (
        <div style={floatingPanelStyle as CSSProperties}>
            <p style={{fontSize: '1.5em'}}>
                <b>
                    Duration: {directions.duration.text}
                    <br/>
                    Biking distance: {directions.biking_distance.text}
                    <br/>{directions.departure_time.text} - {directions.arrival_time.text}
                </b>
            </p>
            {
                directions.steps.map((step, index) => {
                    const stepDepartTime = currentSeconds;
                    currentSeconds += step.duration.value;
                    let numStops = `(${step.transit_details?.num_stops} stops)`;
                    return (
                        <div className="legInstructions" key={index}>
                            <p style={{fontWeight: '500'}}>{secondsToDatePST(stepDepartTime)} - {step.start_address.split(",")[0]}</p>
                            <p>
                                {step.transit_details?.line?.short_name}
                                <Image width='17%' height='17%' layout='fixed' src={transitModeToIcon.get(step.travel_mode)}/>
                                {step.duration.text}
                                {step.transit_details && numStops}
                            </p>
                        </div>
                    );
                })
            }
            <style jsx>{`
                .legInstructions {
                  margin-top: 30px;
                  font-size: 0.8rem;
                }
            `}</style>
        </div>


    )
}
