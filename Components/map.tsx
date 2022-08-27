import {GoogleMap, useJsApiLoader, StandaloneSearchBox, OverlayView, Autocomplete } from "@react-google-maps/api";
import React, {useState} from "react";
import Polylines from "./polylines";
import TripInfoWindow from "./tripInfoWindow";
// import {useEffect, useState, useCallback} from "react";

const containerStyle = {
    Position: "absolute",
    // width: "100%",
    height: "100vh",
    zIndex: "0",
};

const center = {
    lat: 33.67348409529896,
    lng: -117.795852740205,
}; //set this to home address later on

const response = {
    "steps": [
        {
            "distance": {
                "text": "0.7 mi",
                "value": 1183
            },
            "duration": {
                "text": "5 mins",
                "value": 282
            },
            "polyline": "qvolEz|}mULh@AVnBFNuDT}CZiC^sB`@uBx@aD`AqCt@iB~A_DhB{ChEhEvC~CdB`BXV",
            "start_location": {
                "lat": 33.6729271,
                "lng": -117.7955189
            },
            "end_location": {
                "lat": 33.6673212,
                "lng": -117.7911323
            },
            "travel_mode": "bicycling"
        },
        {
            "distance": {
                "text": "4.6 mi",
                "value": 7421
            },
            "duration": {
                "text": "18 mins",
                "value": 1080
            },
            "polyline": "{snlEva}mUHMn@r@HD^`@LLNPj@l@r@r@XXf@j@NPb@\\JJ^\\DBLFl@l@DB^^PNNPjBfBp@n@DHz@x@NPDDl@l@NNJHdAhAlCpCz@t@l@n@VXn@n@BDn@p@XX@Bt@t@@@`@d@NRBDBBZ`@V`@t@lABFBBd@`AJN@BDLRd@HRRd@DNFPFRPf@Ld@Lf@Np@Px@aA\\o@V_@PWNIDOLo@b@c@b@IHMJQRCBS\\]h@Sb@GJSb@Qh@Oh@S`Ac@tCEVM`AIn@U`BId@K^Mh@AFK^AFGVWhAGPm@fBQXKPCH_@r@S^_@l@iAjBa@n@i@x@OTs@fAOZaAbBMPOXGNEJGNe@hBEPG\\Mt@[hBEVG|@Cn@A^?L?V?N@J?T@P@\\BTFVFZBRBHHXFVBJXx@JVVf@JRRXlArBHLJRP\\L\\FL@DFNFT?@DPDVBNFXD`@Dd@B\\@N@r@FhB?V?R?|A?PAPARAP?@?DC^?NCRE~@ABCb@?@Gd@AHCRE\\G^Ml@Kh@CNGVCJI^GVSr@ELITIVIVIRGPEJELEHITKVQ\\CFMRIT?NCDg@x@U^OVWb@a@r@GLsAtBQXj@\\DBTN^T@?h@ZLFf@RTFr@TPFH@XH\\H\\H|@J~@HpADT@nA@N?R@P?b@?P@dA@nCBrDDb@@fA@b@@p@@`@@`@@\\@J?JCjBBv@@\\BT?z@BR@L@L@^An@El@GTE^G\\Il@OPEFCp@Q^M`@ORK^OzBiANIjAm@t@_@tAs@tBgAjAm@hB}@LIXOf@WZOvAs@Fd@Fh@Hl@Fd@NbA@NLx@BPZdCF`@d@rDBNb@dD@FJ~@BL@H\\fCBRBHNjAXvBFh@Ff@BRBLDf@Jz@Jx@@BFb@RzAb@|C@NJl@Fh@@H@B@JB^@PBRDj@AX?f@?h@?b@Af@An@C^E^Ix@EZADAJEPGZAFWfAMd@K\\GRKVKVS`@MVEJ_@n@]n@IPKNABKPEJKPCDCC",
            "start_location": {
                "lat": 33.667337,
                "lng": -117.791157
            },
            "end_location": {
                "lat": 33.64936,
                "lng": -117.839827
            },
            "travel_mode": "TRANSIT",
            "transit_details": {
                "arrival_stop": {
                    "location": {
                        "lat": 33.64936,
                        "lng": -117.839827
                    },
                    "name": "Campus-University Center"
                },
                "arrival_time": {
                    "text": "11:23am",
                    "time_zone": "America/Los_Angeles",
                    "value": 1661451818
                },
                "departure_stop": {
                    "location": {
                        "lat": 33.667337,
                        "lng": -117.791157
                    },
                    "name": "Jeffrey-Quailcreek"
                },
                "departure_time": {
                    "text": "11:05am",
                    "time_zone": "America/Los_Angeles",
                    "value": 1661450738
                },
                "headsign": "UC Irvine",
                "line": {
                    "agencies": [
                        {
                            "name": "Orange County Transportation Authority",
                            "phone": "1 (714) 636-7433",
                            "url": "http://www.octa.net/Bus-Transit/Overview"
                        }
                    ],
                    "color": "#938177",
                    "name": "Orange - Irvine",
                    "short_name": "167",
                    "text_color": "#000000",
                    "url": "http://www.octa.net/eBusBook/RoutePDF/route167.pdf",
                    "vehicle": {
                        "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/bus2.png",
                        "name": "Bus",
                        "type": "BUS"
                    }
                },
                "num_stops": 16
            }
        },
        {
            "distance": {
                "text": "0.7 mi",
                "value": 1153
            },
            "duration": {
                "text": "6 mins",
                "value": 346
            },
            "polyline": "kcklEtqfnUUWEW@EDDDD@LJ@XVx@p@ZXd@Ql@h@FInA{BVc@NRn@h@l@l@P^x@rB^j@TTNHPr@hAWl@Cf@@n@Vh@X\\XVf@b@rAJj@V@NJP@`@ARDXXp@XL@NA?OEeAIs@S_Aa@mA?QHBHHb@pAB?NBNCFETV",
            "start_location": {
                "lat": 33.6493654,
                "lng": -117.8398221
            },
            "end_location": {
                "lat": 33.6433197,
                "lng": -117.8418821
            },
            "travel_mode": "bicycling"
        }
    ],
    "duration": 28.466666666666665,
    "departure_time": "11:00:56 AM",
    "arrival_time": "11:29:24 AM"
};

function Map() {
    const {isLoaded, loadError} = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ["geometry", "drawing", "places"]
    });
    const [map, setMap] = useState(null);
    const [originSearchBox, setOriginSearchBox] = useState(null);
    const onPlacesChanged = () => console.log(originSearchBox.getPlaces()[0].formatted_address);
    const onOriginSBLoad = (ref: google.maps.places.SearchBox) => {
        setOriginSearchBox(ref);
    };


    //extract this into a separate component  https://www.npmjs.com/package/@react-google-maps/api#:~:text=If%20you%20want%20to%20use%20window.google%20object%2C%20you%20need%20to%20extract%20GoogleMap%20in%20separate%20module%2C%20so%20it%20is%20lazy%20executed%20then%20google%2Dmaps%2Dapi%20script%20is%20loaded%20and%20executed%20by%20%3CLoadScript%20/%3E.%20If%20you%20try%20to%20use%20window.google%20before%20it%20is%20loaded%20it%20will%20be%20undefined%20and%20you%27ll%20get%20a%20TypeError.
    const renderMap = () => {
        return (isLoaded ?
                <>
                    <GoogleMap
                        options={{
                            mapTypeControlOptions: {position: google.maps.ControlPosition.BOTTOM_RIGHT},
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false,
                    }}
                        mapContainerStyle={containerStyle}
                        center={center}
                        onLoad={map => setMap(map)}
                        zoom={14}>
                        <Polylines directions={response}/>
                        {/*<OverlayView*/}
                        {/*    position={{lat: 33.67348409529896,*/}
                        {/*        lng: -117.795852740205}}*/}
                        {/*    mapPaneName={OverlayView.FLOAT_PANE}*/}
                        {/*>*/}
                        {/*    <div style={{background: 'white',*/}
                        {/*        border: '1px solid #ccc',*/}
                        {/*        padding: 15}}>*/}
                        {/*        <h1>OverlayView</h1>*/}

                        {/*        <button*/}
                        {/*            // onClick={onClick}*/}
                        {/*            type='button'*/}
                        {/*        >*/}
                        {/*            Click me*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*</OverlayView>*/}

                        {/*<div style={{*/}
                        {/*    maxWidth: "500px",*/}
                        {/*    position: "fixed",*/}
                        {/*    // top: "20px",*/}
                        {/*    left: "50%",*/}
                        {/*    transform: "translateX(-50%)",*/}
                        {/*    zIndex: 10,*/}
                        {/*    display: "flex",*/}
                        {/*}}>*/}
                        {/*    <StandaloneSearchBox*/}
                        {/*        // onPlacesChanged={onPlacesChanged}*/}
                        {/*        // onLoad={onOriginSBLoad}*/}
                        {/*    >*/}
                        {/*        <input*/}
                        {/*            type="text"*/}
                        {/*            placeholder="Customized your placeholder"*/}
                        {/*            style={{*/}
                        {/*                boxSizing: `border-box`,*/}
                        {/*                border: `1px solid transparent`,*/}
                        {/*                width: `240px`,*/}
                        {/*                height: `32px`,*/}
                        {/*                padding: `0 12px`,*/}
                        {/*                borderRadius: `3px`,*/}
                        {/*                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,*/}
                        {/*                fontSize: `14px`,*/}
                        {/*                outline: `none`,*/}
                        {/*                textOverflow: `ellipses`,*/}
                        {/*                position: "absolute",*/}
                        {/*                left: "50%",*/}
                        {/*                marginLeft: "-120px"*/}
                        {/*            }}*/}
                        {/*        />*/}
                        {/*    </StandaloneSearchBox>*/}
                        {/*    <button style={{*/}
                        {/*        background: "#FFF",*/}
                        {/*        border: "1px solid #CCC",*/}
                        {/*        fontSize: "1rem",*/}
                        {/*        cursor: "pointer",*/}
                        {/*    }}>Search</button>*/}
                        {/*</div>*/}

                    </GoogleMap>
                </>
                :
                <p>loading...</p>
        );
    };
    return loadError ? <>error: {loadError}</> : renderMap();
}

export default Map;
