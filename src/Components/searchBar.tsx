import React from "react";
import {Autocomplete} from "@react-google-maps/api";

const searchBarStyle = {
    top: "0vh",
    position: "absolute",
    height: "2vh",
    backgroundColor: "#fff",
    zIndex: 10,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    width: "40vh",
    // left: "50%",
    alignItems: "stretch"
} as React.CSSProperties;

const inputBoxesStyle = {
    display:"flex",
    flexDirection: "row",
} as React.CSSProperties;

export default function SearchBar() {
    // const onPlacesChanged = () => console.log(originSearchBox.getPlaces()[0].formatted_address);
    // const onOriginSBLoad = (ref: google.maps.places.SearchBox) => {
    //     setOriginSearchBox(ref);
    // };

    return(
        <div style={searchBarStyle}>
            <div style={inputBoxesStyle}>
                <Autocomplete>
                    <input
                        type='text'
                        style={{width: "20vh"}}
                        placeholder='Origin'
                    />
                </Autocomplete>
                <Autocomplete>
                    <input
                        type='text'
                        style={{width: "20vh"}}
                        placeholder='Destination'  />
                </Autocomplete>
            </div>
            <button color='pink' type='submit' >
                Calculate Route
            </button>
        </div>
    );

}