import React, {useState} from "react";
import PolyLine from "./polyline";

export default function Polylines({directions}) {
    console.log(directions);
    const polylines: JSX.Element[] = directions.steps.map(step => {
    });

    return <>{directions.steps.map(step => {
        return <PolyLine step={step}/>
    })}</>;
}