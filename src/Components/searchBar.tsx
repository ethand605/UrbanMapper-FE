import React, {useRef} from "react";
import {Autocomplete} from "@react-google-maps/api";
import {getMultiModalDirections} from "../services/directions";

//TODO: style it better
const searchBarStyle = {
    top: "0vh",
    position: "absolute",
    height: "vh",
    backgroundColor: "#fff",
    zIndex: 10,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    width: "40vh",
    alignItems: "stretch"
} as React.CSSProperties;

const inputBoxesStyle = {
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
} as React.CSSProperties;

export default function SearchBar() {
    const originBoxRef: React.LegacyRef<HTMLInputElement> = useRef(null);
    const destinationBoxRef: React.LegacyRef<HTMLInputElement> = useRef(null);

    const getDirections = () => {
        if (originBoxRef.current.value==='' || destinationBoxRef.current.value===''){
            return
        }
        //put the direction into a custom hook
        getMultiModalDirections(originBoxRef.current.value, destinationBoxRef.current.value);
    }

    return(
        <div style={searchBarStyle}>
            <div style={inputBoxesStyle}>
                <Autocomplete>
                    <input
                        type='text'
                        style={{width: "20vh"}}
                        placeholder='Origin'
                        ref={originBoxRef}
                    />
                </Autocomplete>
                <Autocomplete>
                    <input
                        type='text'
                        style={{width: "20vh"}}
                        placeholder='Destination'
                        ref={destinationBoxRef}
                    />
                </Autocomplete>
            </div>
            <button type='submit' onClick={getDirections}>
                Calculate Route
            </button>
        </div>
    );
}