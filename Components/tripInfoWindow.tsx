import {CSSProperties} from "react";
const floatingWinStyle = {
    position: "absolute",
    top: "0vh",
    backgroundColor: "#fff",
    zIndex: 10,
    margin: 0,
    padding: 0,
    width: "20rem",
    height: "100vh",
    border: "1px solid black",
}


export default function TripInfoWindow() {
    return (
        <div style={floatingWinStyle as CSSProperties}>
            do this
        </div>
    )
}
