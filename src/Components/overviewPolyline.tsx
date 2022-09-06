import SinglePolyline from "./singlePolyline";

export default function OverviewPolyline({directions}) {
    return <>{directions.steps.map(step => {
        return <SinglePolyline key={step.polyline} step={step}/>
    })}</>;
}
