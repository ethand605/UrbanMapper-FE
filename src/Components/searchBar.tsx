import React, {useRef} from "react";
import {Autocomplete} from "@react-google-maps/api";
import {getMultiModalDirections} from "../services/directions";
import {useDirection} from "../hooks/directionContext";


//TODO: style it better
const searchBarStyle = {
    top: "0vh",
    position: "absolute",
    // height: "4vh",
    backgroundColor: "#fff",
    zIndex: 10,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    width: "40vh",
    alignItems: "stretch"
} as React.CSSProperties;

const inputBoxesStyle = {
    height: "4vh",
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
} as React.CSSProperties;

const inputBoxStyle = {
    width: "20vh",
    height: "4vh"
} as React.CSSProperties;

const searchButtonStyle = {
    backgroundColor: "#008CBA",
    color: "white",
    border: "none",
    textAlign: "center",
    height: "4vh",
    cursor: "pointer",
} as React.CSSProperties;

export default function SearchBar() {
    const {directions, setDirections} = useDirection();
    //TODO: change this to controlled form later https://reactjs.org/docs/uncontrolled-components.html
    //https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/ so I can control form value via a prop
    const originBoxRef: React.LegacyRef<HTMLInputElement> = useRef(null);
    const destinationBoxRef: React.LegacyRef<HTMLInputElement> = useRef(null);

    const getDirections = async () => {
        if (originBoxRef.current.value==='' || destinationBoxRef.current.value===''){
            return
        }
        const newDirections = await getMultiModalDirections(originBoxRef.current.value, destinationBoxRef.current.value);
        setDirections(newDirections);
    }

    return(
        <div style={searchBarStyle}>
            <div style={inputBoxesStyle}>
                <Autocomplete>
                    <input
                        name='origin'
                        type='text'
                        autoComplete='new-password'
                        style={inputBoxStyle}
                        placeholder='Origin'
                        ref={originBoxRef}
                    />
                </Autocomplete>
                <Autocomplete>
                    <input
                        name='destination'
                        type='text'
                        autoComplete='new-password'
                        style={inputBoxStyle}
                        placeholder='Destination'
                        ref={destinationBoxRef}
                    />
                </Autocomplete>
            </div>
            <button
                style={searchButtonStyle}
                type='submit'
                onClick={getDirections}
            >
                Calculate Route
            </button>
        </div>
    );
}