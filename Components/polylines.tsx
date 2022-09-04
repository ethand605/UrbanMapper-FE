import React, {useState} from "react";
import PolyLine from "./polyline";

export default function Polylines({directions}) {
    return <>{directions.steps.map(step => {
        return <PolyLine key={step.polyline} step={step}/>
    })}</>;
}
