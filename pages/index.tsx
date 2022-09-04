import type {NextPage} from 'next';
import Map from '../Components/map';
import TripInfoWindow from "../Components/tripInfoWindow";
import React from "react";
import {StandaloneSearchBox} from "@react-google-maps/api";

const directions = {
    "steps": [
        {
            "distance": {
                "text": "1.2 mi",
                "value": 1940
            },
            "duration": {
                "text": "6 mins",
                "value": 378
            },
            "polyline": "qvolEz|}mULh@AVvAHExAEjBIpAa@jEWlB_@nBaA`Ei@jB{@zBs@~AkAzBW`@wB`DmDjEmA`Bu@rAaEbJgA~B{@xAgAzAaBjB}DzDq@x@k@v@w@pAU^TTvAvA",
            "start_location": {
                "lat": 33.6729271,
                "lng": -117.7955189
            },
            "end_location": {
                "lat": 33.6804434,
                "lng": -117.8120789
            },
            "start_address": "5051 Alton Pkwy, Irvine, CA 92604, USA",
            "end_address": "Culver-Alton, Irvine, CA 92614, USA",
            "travel_mode": "bicycling"
        },
        {
            "distance": {
                "text": "3.4 mi",
                "value": 5435
            },
            "duration": {
                "text": "13 mins",
                "value": 780
            },
            "polyline": "_fqlExdanUJOHHv@t@b@b@ZXjBfBj@h@`BbBn@n@`A~@d@f@zBzBzA~A^`@VRt@t@VRdAlAdAdA@?hAfAv@v@ZXnAlAJJLNt@r@dAbApAnAPPpFpF`A|@r@n@z@x@RRbC|Br@p@XXRTTRf@f@x@z@NN~A`Bz@`Az@|@dAfAl@n@JJ~@hAz@v@v@t@`@^h@b@j@\\DBTN^T@?h@ZLFf@RTFr@TPFH@XH\\H\\H|@J~@HpADT@nA@N?R@P?b@?P@dA@nCBrDDb@@fA@b@@p@@`@@`@@\\@J?JCjBBv@@\\BT?z@BR@L@L@^An@El@GTE^G\\Il@OPEFCp@Q^M`@ORK^OzBiANIjAm@t@_@tAs@tBgAjAm@hB}@LIXOf@WZOvAs@Fd@Fh@Hl@Fd@NbA@NLx@BPZdCF`@d@rDBNb@dD@FJ~@BL@H\\fCBRBHNjAXvBFh@Ff@BRBLDf@Jz@Jx@@BFb@RzAb@|C@NJl@Fh@@H@B@JB^@PBRDj@AX?f@?h@?b@Af@An@C^E^Ix@EZADAJEPGZAFWfAMd@K\\GRKVKVS`@MVEJ_@n@]n@IPKNABKPEJKPCDCC",
            "start_location": {
                "lat": 33.68048100000001,
                "lng": -117.812134
            },
            "end_location": {
                "lat": 33.64936,
                "lng": -117.839827
            },
            "start_address": "Culver-Alton, Irvine, CA 92614, USA",
            "end_address": "Campus-University Center, Irvine, CA 92612, USA",
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
                    "text": "5:48pm",
                    "time_zone": "America/Los_Angeles",
                    "value": 1662252480
                },
                "departure_stop": {
                    "location": {
                        "lat": 33.68048100000001,
                        "lng": -117.812134
                    },
                    "name": "Culver-Alton"
                },
                "departure_time": {
                    "text": "5:35pm",
                    "time_zone": "America/Los_Angeles",
                    "value": 1662251700
                },
                "headsign": "Newport Transp Center",
                "line": {
                    "agencies": [
                        {
                            "name": "Orange County Transportation Authority",
                            "phone": "1 (714) 636-7433",
                            "url": "http://www.octa.net/Bus-Transit/Overview"
                        }
                    ],
                    "color": "#00aff2",
                    "name": "Tustin - Newport Beach",
                    "short_name": "79",
                    "text_color": "#000000",
                    "url": "http://www.octa.net/eBusBook/RoutePDF/route079.pdf",
                    "vehicle": {
                        "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/bus2.png",
                        "name": "Bus",
                        "type": "BUS"
                    }
                },
                "num_stops": 11
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
            "start_address": "Campus-University Center, Irvine, CA 92612, USA",
            "end_address": "5084 Donald Bren Hall, Los Trancos Dr. and East Peltason Dr., Irvine, CA 92697, USA",
            "travel_mode": "bicycling"
        }
    ],
    "duration": {
        "text": "25 mins",
        "value": 1504
    },
    "departure_time": {
        "text": "05:28 PM",
        "value": 1662251322
    },
    "arrival_time": {
        "text": "05:53 PM",
        "value": 1662252826
    }
};

const Home: NextPage = () => {
    return (
        <div>
            <Map/>
            {/*use redux to pass in the steps here*/}
            <TripInfoWindow directions={directions}/>
        </div>
    )

}

export default Home;
