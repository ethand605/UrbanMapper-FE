import type {NextPage} from 'next';
import Map from '../Components/map';
import TripInfoWindow from "../Components/tripInfoWindow";
import React from "react";
import {useJsApiLoader} from "@react-google-maps/api";
import SearchBar from "../Components/searchBar";

const directions = {
    "steps": [
        {
            "distance": {
                "text": "364 ft",
                "value": 111
            },
            "duration": {
                "text": "1 min",
                "value": 45
            },
            "polyline": "qvolEz|}mULh@AVvAHC~@",
            "start_location": {
                "lat": 33.6729271,
                "lng": -117.7955189
            },
            "end_location": {
                "lat": 33.6724438,
                "lng": -117.7961985
            },
            "start_address": "5051 Alton Pkwy, Irvine, CA 92604, USA",
            "end_address": "Alton-Ent 5051 Cedar Creek, Irvine, CA 92604, USA",
            "travel_mode": "bicycling"
        },
        {
            "distance": {
                "text": "3.7 mi",
                "value": 5935
            },
            "duration": {
                "text": "15 mins",
                "value": 900
            },
            "polyline": "etolEda~mUR@AXEhB?@G`AANGx@I|@?BOnASvACTIf@UfAOv@EN_@|AKZMf@EJUv@]z@]~@Uh@]t@m@lA]l@ILMRm@`AiA~AuBfCILm@t@m@x@_@f@[f@MVINAB_@r@_AvB_@z@e@fA[r@_@~@OVWd@?@Yf@a@p@U\\q@|@[`@s@v@GHIFcAbA}@|@A@u@r@CBa@d@ORY`@QTYd@]j@U^OVYb@WXGNq@jACHKR[v@Sh@Qh@CFU|@ENCLI^Kb@Il@CPG\\Gn@CTIhAEl@Ch@KjEEhAGnBCn@EfAAd@GtAGrBMlEGzBAXCdAEnA?LCf@E|@APEd@Kz@MbAAHKd@Mn@I\\GVK\\K^Wt@Wn@O^A@[p@_@p@e@v@m@`AOTs@jAsDfGMPYd@OXGHSZW`@EHA@mApBiAfBk@~@ILo@bA_@n@OViAjB]h@U^TVNNBDf@f@tAtAbA`A|@|@@@fBfB\\\\fCfCz@z@zDvDdAdA`@`@^Zr@r@~@~@HHPPd@b@xAxAb@d@VVRPHHNN\\Z^X`BvABBJJd@^q@lBKZKXUh@KTGJCHM^a@fASx@GLGPSn@IXMZi@zAQd@Of@i@`BmAlDe@xACF[~@u@vBUr@KZg@bBQh@IXKj@I\\I`@EXEZADIv@EA",
            "start_location": {
                "lat": 33.672515,
                "lng": -117.796193
            },
            "end_location": {
                "lat": 33.684513,
                "lng": -117.848337
            },
            "start_address": "Alton-Ent 5051 Cedar Creek, Irvine, CA 92604, USA",
            "end_address": "Main-Von Karman, Irvine, CA 92614, USA",
            "travel_mode": "TRANSIT",
            "transit_details": {
                "arrival_stop": {
                    "location": {
                        "lat": 33.684513,
                        "lng": -117.848337
                    },
                    "name": "Main-Von Karman"
                },
                "arrival_time": {
                    "text": "11:33am",
                    "time_zone": "America/Los_Angeles",
                    "value": 1662489234
                },
                "departure_stop": {
                    "location": {
                        "lat": 33.672515,
                        "lng": -117.796193
                    },
                    "name": "Alton-Ent 5051 Cedar Creek"
                },
                "departure_time": {
                    "text": "11:18am",
                    "time_zone": "America/Los_Angeles",
                    "value": 1662488334
                },
                "headsign": "Costa Mesa - Bristol and Sunflower",
                "line": {
                    "agencies": [
                        {
                            "name": "Orange County Transportation Authority",
                            "phone": "1 (714) 636-7433",
                            "url": "http://www.octa.net/Bus-Transit/Overview"
                        }
                    ],
                    "color": "#00aff2",
                    "name": "Costa Mesa - Mission Viejo",
                    "short_name": "86",
                    "text_color": "#000000",
                    "url": "http://www.octa.net/eBusBook/RoutePDF/route086.pdf",
                    "vehicle": {
                        "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/bus2.png",
                        "name": "Bus",
                        "type": "BUS"
                    }
                },
                "num_stops": 14
            }
        },
        {
            "distance": {
                "text": "0.4 mi",
                "value": 586
            },
            "duration": {
                "text": "2 mins",
                "value": 116
            },
            "polyline": "__rlEdghnUOjBe@`FC\\^Hd@gFHiAPqBNqAhCjCpAnA",
            "start_location": {
                "lat": 33.6845128,
                "lng": -117.8483376
            },
            "end_location": {
                "lat": 33.6831259,
                "lng": -117.8488464
            },
            "start_address": "Main-Von Karman, Irvine, CA 92614, USA",
            "end_address": "Von Karman-Main, Irvine, CA 92614, USA",
            "travel_mode": "bicycling"
        },
        {
            "distance": {
                "text": "3.0 mi",
                "value": 4804
            },
            "duration": {
                "text": "12 mins",
                "value": 720
            },
            "polyline": "yvqlEtjhnULSFHRPzA|ANJTRFDJHTNBBHFPLNH@?XPj@\\B?dB|@l@ZjAn@tBjAvAx@dAj@v@b@TLVL|@d@v@b@FDBBD@B@PBxAv@f@Vv@`@PJlAr@LHVNp@b@RJDBn@^b@VNJPJ`An@t@f@B?NJNHRNt@j@pAfAFDLLj@h@r@p@LLHJ`A`Av@v@^^RRh@d@PPfAfAn@n@VTTTTVn@l@d@d@FFZZNLn@p@\\ZLPf@u@Va@^m@l@gAJOjAiBNUd@y@f@w@f@w@NUDK`@m@Xc@NUP[j@}@Ta@LQZg@HOx@qAf@y@P_@V]^o@R[~@}AR[PWR]t@mAl@cANYFKHMVe@PWPUJQTa@LQFMDGBE@EFQFK^k@@A^g@`@e@DEDEBCZYd@c@\\YVSNKNKPMTMRMPI`@Sh@U\\MPE\\KXItA[xCo@BAj@MbB_@v@Qn@MREZIRENEVITGJEVIRI@Ax@a@D?l@]RQPMZWPOJKLODETUDE`@i@PSPOHKLQVYJOLOFKZg@f@s@DGNU\\g@JQl@}@NUFG?AHMb@o@T[h@w@b@q@DEX]LOBC@AJKLKLM@?LKZSZUVMNIJCVKFAjAYFAlAQ\\E^ITETI^KRK`@QTKDELITOTQZWPQX]LOBEZe@jAqB\\m@HOLJ",
            "start_location": {
                "lat": 33.68317,
                "lng": -117.84891
            },
            "end_location": {
                "lat": 33.6491481,
                "lng": -117.8399432
            },
            "start_address": "Von Karman-Main, Irvine, CA 92614, USA",
            "end_address": "Campus-University Center, Irvine, CA 92697, USA",
            "travel_mode": "TRANSIT",
            "transit_details": {
                "arrival_stop": {
                    "location": {
                        "lat": 33.6491481,
                        "lng": -117.8399432
                    },
                    "name": "Campus-University Center"
                },
                "arrival_time": {
                    "text": "12:33pm",
                    "time_zone": "America/Los_Angeles",
                    "value": 1662492780
                },
                "departure_stop": {
                    "location": {
                        "lat": 33.68317,
                        "lng": -117.84891
                    },
                    "name": "Von Karman-Main"
                },
                "departure_time": {
                    "text": "12:21pm",
                    "time_zone": "America/Los_Angeles",
                    "value": 1662492060
                },
                "headsign": "Tustin - The District",
                "line": {
                    "agencies": [
                        {
                            "name": "Orange County Transportation Authority",
                            "phone": "1 (714) 636-7433",
                            "url": "http://www.octa.net/Bus-Transit/Overview"
                        }
                    ],
                    "color": "#00aff2",
                    "name": "Anaheim - Irvine",
                    "short_name": "59",
                    "text_color": "#000000",
                    "url": "http://www.octa.net/eBusBook/RoutePDF/route059.pdf",
                    "vehicle": {
                        "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/bus2.png",
                        "name": "Bus",
                        "type": "BUS"
                    }
                },
                "num_stops": 8
            }
        },
        {
            "distance": {
                "text": "0.7 mi",
                "value": 1094
            },
            "duration": {
                "text": "4 mins",
                "value": 265
            },
            "polyline": "sbklEfrfnU\\o@~AtAl@h@FInA{BVc@NRn@h@l@l@P^x@rB^j@TTNHPr@hAWl@Cf@@n@Vh@X\\XVf@b@rAJj@V@NJP@`@ARDXXp@XL@NA?OEeAIs@S_Aa@mA?QHBHHb@pAB?NBNCFETV",
            "start_location": {
                "lat": 33.6491875,
                "lng": -117.8399029
            },
            "end_location": {
                "lat": 33.6433197,
                "lng": -117.8418821
            },
            "start_address": "Campus-University Center, Irvine, CA 92697, USA",
            "end_address": "5084 Donald Bren Hall, Los Trancos Dr. and East Peltason Dr., Irvine, CA 92697, USA",
            "travel_mode": "bicycling"
        }
    ],
    "duration": {
        "text": "34 mins",
        "value": 2046
    },
    "biking_distance": {
        "text": "2 km",
        "value": 1791
    },
    "departure_time": {
        "text": "11:18 AM",
        "value": 1662488289
    },
    "arrival_time": {
        "text": "11:52 AM",
        "value": 1662490335
    }
};

const Home: NextPage = () => {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ["geometry", "drawing", "places"]
    });


    return (
        !isLoaded ? <div>Loading...</div> :
        <>
            {/*use redux to pass in the steps here*/}
                <Map directions={directions}/>
                <TripInfoWindow directions={directions}/>
                <SearchBar/>
        </>
    )
}

export default Home;
