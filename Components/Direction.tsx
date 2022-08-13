import {
  GoogleMap,
  useJsApiLoader,
  DirectionsService,
  DirectionsRenderer,
  LoadScript,
  Polyline,
} from "@react-google-maps/api";
import { useEffect, useState, useCallback } from "react";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 33.67348409529896,
  lng: -117.795852740205,
};

const response = {
  "geocoded_waypoints": [
    {
      "geocoder_status": "OK",
      "place_id": "ChIJWSZtSqXd3IARy-E6oTXnKtg",
      "types": [
        "premise"
      ]
    },
    {
      "geocoder_status": "OK",
      "place_id": "ChIJNzFd8A_e3IARg0wTXiKOGKw",
      "types": [
        "establishment",
        "point_of_interest"
      ]
    }
  ],
  "routes": [
    {
      "bounds": {
        "northeast": {
          "lat": 33.6808567,
          "lng": -117.7950994
        },
        "southwest": {
          "lat": 33.6433197,
          "lng": -117.8418821
        }
      },
      "copyrights": "Map data ©2022 Google",
      "fare": {
        "currency": "USD",
        "text": "$2.00",
        "value": 2
      },
      "legs": [
        {
          "arrival_time": {
            "text": "5:02pm",
            "time_zone": "America/Los_Angeles",
            "value": 1659916952
          },
          "departure_time": {
            "text": "4:09pm",
            "time_zone": "America/Los_Angeles",
            "value": 1659913751
          },
          "distance": {
            "text": "5.3 mi",
            "value": 8492
          },
          "duration": {
            "text": "53 mins",
            "value": 3201
          },
          "end_address": "6210, Donald Bren Hall, Irvine, CA 92697, USA",
          "end_location": {
            "lat": 33.6433197,
            "lng": -117.8418821
          },
          "start_address": "5051 Alton Pkwy, Irvine, CA 92604, USA",
          "start_location": {
            "lat": 33.6737715,
            "lng": -117.7955883
          },
          "steps": [
            {
              "distance": {
                "text": "1.3 mi",
                "value": 2080
              },
              "duration": {
                "text": "26 mins",
                "value": 1548
              },
              "end_location": {
                "lat": 33.6804434,
                "lng": -117.8120789
              },
              "html_instructions": "Walk to Culver-Alton",
              "polyline": {
                "points": "a|olEl}}mUv@wAVIh@LBBX^FFT`A?T?FL@fADCrAGhBG`AANGz@Iz@OrAOlACPALKf@SfAOv@EN]rAJHFDJHENM^a@rAc@lAw@fBKXk@jA_@r@c@t@W`@IL[d@g@r@{@fAKLsBfCIJi@p@o@`AOVQZS`@]x@o@vA{BfF}@dBk@`Au@dACBMP]`@EHc@h@KJEDIJoBjB]\\m@t@_@`@W\\_@f@Yd@]h@ILIPILrApA"
              },
              "start_location": {
                "lat": 33.6737715,
                "lng": -117.7955883
              },
              "steps": [
                {
                  "distance": {
                    "text": "0.1 mi",
                    "value": 176
                  },
                  "duration": {
                    "text": "2 mins",
                    "value": 127
                  },
                  "end_location": {
                    "lat": 33.6727916,
                    "lng": -117.7958797
                  },
                  "html_instructions": "Head <b>southeast</b>",
                  "polyline": {
                    "points": "a|olEl}}mUv@wAVIh@LBBX^FFT`A?T?FL@"
                  },
                  "start_location": {
                    "lat": 33.6737715,
                    "lng": -117.7955883
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "161 ft",
                    "value": 49
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 36
                  },
                  "end_location": {
                    "lat": 33.6724256,
                    "lng": -117.7959147
                  },
                  "html_instructions": "Turn <b>left</b> toward <b>Alton Pkwy</b>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "}uolEf_~mUfAD"
                  },
                  "start_location": {
                    "lat": 33.6727916,
                    "lng": -117.7958797
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "0.3 mi",
                    "value": 417
                  },
                  "duration": {
                    "text": "5 mins",
                    "value": 297
                  },
                  "end_location": {
                    "lat": 33.67318,
                    "lng": -117.8002295
                  },
                  "html_instructions": "Turn <b>right</b> onto <b>Alton Pkwy</b>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "usolEl_~mUCrAGhBG`AANGz@Iz@OrAOlACPALKf@SfAOv@EN]rAJH"
                  },
                  "start_location": {
                    "lat": 33.6724256,
                    "lng": -117.7959147
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "43 ft",
                    "value": 13
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 20
                  },
                  "end_location": {
                    "lat": 33.6731102,
                    "lng": -117.8003862
                  },
                  "html_instructions": "Turn <b>left</b> onto <b>Creek Rd</b>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "kxolElz~mUFDJHEN"
                  },
                  "start_location": {
                    "lat": 33.67318,
                    "lng": -117.8002295
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "0.8 mi",
                    "value": 1362
                  },
                  "duration": {
                    "text": "17 mins",
                    "value": 1012
                  },
                  "end_location": {
                    "lat": 33.6808567,
                    "lng": -117.8116722
                  },
                  "html_instructions": "Turn <b>right</b> onto <b>Alton Pkwy</b>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "}wolEl{~mUM^a@rAc@lAw@fBKXk@jA_@r@c@t@W`@IL[d@g@r@{@fAKLsBfCIJi@p@o@`AOVQZS`@]x@o@vA{BfF}@dBk@`Au@dACBMP]`@EHc@h@KJEDIJoBjB]\\m@t@_@`@W\\_@f@Yd@]h@ILIPIL"
                  },
                  "start_location": {
                    "lat": 33.6731102,
                    "lng": -117.8003862
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "207 ft",
                    "value": 63
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 56
                  },
                  "end_location": {
                    "lat": 33.6804434,
                    "lng": -117.8120789
                  },
                  "html_instructions": "Turn <b>left</b> onto <b>Culver Dr</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "khqlE|aanUrApA"
                  },
                  "start_location": {
                    "lat": 33.6808567,
                    "lng": -117.8116722
                  },
                  "travel_mode": "WALKING"
                }
              ],
              "travel_mode": "WALKING"
            },
            {
              "distance": {
                "text": "3.4 mi",
                "value": 5435
              },
              "duration": {
                "text": "14 mins",
                "value": 840
              },
              "end_location": {
                "lat": 33.64936,
                "lng": -117.839827
              },
              "html_instructions": "Bus towards Newport Transp Center",
              "polyline": {
                "points": "_fqlExdanUJOHHv@t@b@b@ZXjBfBj@h@`BbBn@n@`A~@d@f@zBzBzA~A^`@VRt@t@VRdAlAdAdA@?hAfAv@v@ZXnAlAJJLNt@r@dAbApAnAPPpFpF`A|@r@n@z@x@RRbC|Br@p@XXRTTRf@f@x@z@NN~A`Bz@`Az@|@dAfAl@n@JJ~@hAz@v@v@t@`@^h@b@j@\\DBTN^T@?h@ZLFf@RTFr@TPFH@XH\\H\\H|@J~@HpADT@nA@N?R@P?b@?P@dA@nCBrDDb@@fA@b@@p@@`@@`@@\\@J?JCjBBv@@\\BT?z@BR@L@L@^An@El@GTE^G\\Il@OPEFCp@Q^M`@ORK^OzBiANIjAm@t@_@tAs@tBgAjAm@hB}@LIXOf@WZOvAs@Fd@Fh@Hl@Fd@NbA@NLx@BPZdCF`@d@rDBNb@dD@FJ~@BL@H\\fCBRBHNjAXvBFh@Ff@BRBLDf@Jz@Jx@@BFb@RzAb@|C@NJl@Fh@@H@B@JB^@PBRDj@AX?f@?h@?b@Af@An@C^E^Ix@EZADAJEPGZAFWfAMd@K\\GRKVKVS`@MVEJ_@n@]n@IPKNABKPEJKPCDCC"
              },
              "start_location": {
                "lat": 33.68048100000001,
                "lng": -117.812134
              },
              "transit_details": {
                "arrival_stop": {
                  "location": {
                    "lat": 33.64936,
                    "lng": -117.839827
                  },
                  "name": "Campus-University Center"
                },
                "arrival_time": {
                  "text": "4:49pm",
                  "time_zone": "America/Los_Angeles",
                  "value": 1659916140
                },
                "departure_stop": {
                  "location": {
                    "lat": 33.68048100000001,
                    "lng": -117.812134
                  },
                  "name": "Culver-Alton"
                },
                "departure_time": {
                  "text": "4:35pm",
                  "time_zone": "America/Los_Angeles",
                  "value": 1659915300
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
              },
              "travel_mode": "TRANSIT"
            },
            {
              "distance": {
                "text": "0.6 mi",
                "value": 977
              },
              "duration": {
                "text": "14 mins",
                "value": 812
              },
              "end_location": {
                "lat": 33.6433197,
                "lng": -117.8418821
              },
              "html_instructions": "Walk to 6210, Donald Bren Hall, Irvine, CA 92697, USA",
              "polyline": {
                "points": "qcklEzqfnUBEJQDIJS@AJQHO^q@\\o@DILWRc@JWJWFQJ]J]JHDBLHNJDBNJHD@?FBF?F@FEFGTNFBD@BAD?J@CH?L@JBMD@TLh@TTLRFFFBBDdAfAI@X@JDl@@Nj@A`@?H?|@Lh@LVJFJHDVNHDJHZVNV`@d@Z\\RVLHJPRf@@H?FBJFNHLJBFHb@pAB?FBF?FAFAFETV"
              },
              "start_location": {
                "lat": 33.6493654,
                "lng": -117.8398221
              },
              "steps": [
                {
                  "distance": {
                    "text": "0.1 mi",
                    "value": 219
                  },
                  "duration": {
                    "text": "3 mins",
                    "value": 171
                  },
                  "end_location": {
                    "lat": 33.6482326,
                    "lng": -117.8379476
                  },
                  "html_instructions": "Head <b>southeast</b> on <b>Campus Dr</b>",
                  "polyline": {
                    "points": "qcklEzqfnUBEJQDIJS@AJQHO^q@\\o@DILWRc@JWJWFQJ]J]JH"
                  },
                  "start_location": {
                    "lat": 33.6493654,
                    "lng": -117.8398221
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "351 ft",
                    "value": 107
                  },
                  "duration": {
                    "text": "2 mins",
                    "value": 116
                  },
                  "end_location": {
                    "lat": 33.6473891,
                    "lng": -117.8382623
                  },
                  "html_instructions": "Turn <b>right</b> onto <b>Stanford</b>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "m|jlEdffnUDBLHNJDBNJHD@?FBF?F@FEFGTNFBD@BAD?J@"
                  },
                  "start_location": {
                    "lat": 33.6482326,
                    "lng": -117.8379476
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "52 ft",
                    "value": 16
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 13
                  },
                  "end_location": {
                    "lat": 33.6474036,
                    "lng": -117.8384355
                  },
                  "html_instructions": "Turn <b>right</b>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "ewjlEbhfnUCH?L@J"
                  },
                  "start_location": {
                    "lat": 33.6473891,
                    "lng": -117.8382623
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "33 ft",
                    "value": 10
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 8
                  },
                  "end_location": {
                    "lat": 33.6473527,
                    "lng": -117.8383803
                  },
                  "html_instructions": "Turn <b>left</b>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "gwjlEfifnUBMD@"
                  },
                  "start_location": {
                    "lat": 33.6474036,
                    "lng": -117.8384355
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "344 ft",
                    "value": 105
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 79
                  },
                  "end_location": {
                    "lat": 33.6467265,
                    "lng": -117.839078
                  },
                  "html_instructions": "Turn <b>right</b> at <b>Pereira Dr</b>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "}vjlEzhfnUTLh@TTLRFFFBBDdA"
                  },
                  "start_location": {
                    "lat": 33.6473527,
                    "lng": -117.8383803
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "131 ft",
                    "value": 40
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 32
                  },
                  "end_location": {
                    "lat": 33.6463718,
                    "lng": -117.8390252
                  },
                  "html_instructions": "Turn <b>left</b> toward <b>Ring Rd</b>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "asjlEfmfnUfAI"
                  },
                  "start_location": {
                    "lat": 33.6467265,
                    "lng": -117.839078
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "154 ft",
                    "value": 47
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 36
                  },
                  "end_location": {
                    "lat": 33.6463129,
                    "lng": -117.8395311
                  },
                  "html_instructions": "Turn <b>right</b> toward <b>Ring Rd</b>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "ypjlE|lfnU@X@JDl@@N"
                  },
                  "start_location": {
                    "lat": 33.6463718,
                    "lng": -117.8390252
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "0.2 mi",
                    "value": 334
                  },
                  "duration": {
                    "text": "5 mins",
                    "value": 282
                  },
                  "end_location": {
                    "lat": 33.6439323,
                    "lng": -117.8413103
                  },
                  "html_instructions": "Turn <b>left</b> onto <b>Ring Rd</b><div style=\"font-size:0.9em\">Take the stairs</div>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "mpjlE`pfnUj@A`@?H?|@Lh@LVJFJHDVNHDJHZVNV`@d@Z\\RVLHJPRf@@H?FBJFNHL"
                  },
                  "start_location": {
                    "lat": 33.6463129,
                    "lng": -117.8395311
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "187 ft",
                    "value": 57
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 42
                  },
                  "end_location": {
                    "lat": 33.6436492,
                    "lng": -117.8417919
                  },
                  "html_instructions": "Slight <b>left</b> to stay on <b>Ring Rd</b>",
                  "maneuver": "turn-slight-left",
                  "polyline": {
                    "points": "qajlEd{fnUJBFHb@pA"
                  },
                  "start_location": {
                    "lat": 33.6439323,
                    "lng": -117.8413103
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "82 ft",
                    "value": 25
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 21
                  },
                  "end_location": {
                    "lat": 33.6434348,
                    "lng": -117.8417552
                  },
                  "html_instructions": "Turn <b>left</b>",
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "y_jlEd~fnUB?FBF?FAFAFE"
                  },
                  "start_location": {
                    "lat": 33.6436492,
                    "lng": -117.8417919
                  },
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "56 ft",
                    "value": 17
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 12
                  },
                  "end_location": {
                    "lat": 33.6433197,
                    "lng": -117.8418821
                  },
                  "html_instructions": "Turn <b>right</b>",
                  "maneuver": "turn-right",
                  "polyline": {
                    "points": "m~ilE~}fnUTV"
                  },
                  "start_location": {
                    "lat": 33.6434348,
                    "lng": -117.8417552
                  },
                  "travel_mode": "WALKING"
                }
              ],
              "travel_mode": "WALKING"
            }
          ],
          "traffic_speed_entry": [],
          "via_waypoint": []
        }
      ],
      "overview_polyline": {
        "points": "a|olEl}}mUv@wAVIh@LBB`@f@T`A?T?FL@fADCrAOjDIjAYnCS~Aq@tDc@bBRNJHENo@rB{AtDw@dBeBxCcAxAgAtA}BrCyArBa@r@q@zAkD~HiBfDeB|B{@dAyBvBkArAw@~@y@lA{@vArApAGHJOHHzAxAfC`C~F|F|GdHlAhA|A`BhEdEdCbC~ExErHnHnBhBdF|EjClCfFpFrBvBjAtArBlBjAbAfBfA`Bv@dBf@v@RzAT~@HpADdBBxA@zKLnHLJCjBBtADrBFl@?|AM`Cg@jBi@t@[zCyAfFkCxH}DtDkB`@bDpBjO|AjLrAzKbBbMHx@Dd@BdAA|CEnAOxAO~@o@pCk@`BgAtBwAjCEENW^q@lA{Bx@kBRo@J]JHRLTNb@TN@NM\\RH?P@CV@JBMZNzAr@HhAfAI@XFx@@Nj@Aj@?fBZVJFJ`@TTNZVNV|@bA`@`@^x@@PJZHLJBj@zAJBNANGTV"
      },
      "summary": "",
      "warnings": [
        "Walking directions are in beta. Use caution – This route may be missing sidewalks or pedestrian paths."
      ],
      "waypoint_order": []
    }
  ],
  "status": "OK"
};

function MyComponent() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["geometry"]
  });

  const renderMap = () => {
    return (
      <>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          <Polyline
            path={google.maps.geometry.encoding.decodePath("qvolEz|}mULh@AVvAHExAEjBIpAa@jEWlB_@nBaA`Ei@jB{@zBs@~AkAzBW`@wB`DmDjEmA`Bu@rAaEbJgA~B{@xAgAzAaBjB}DzDq@x@k@v@w@pAU^TTvAvA")}
            // geodesic={false}
            options={{
              strokeColor: "#38B44F",
              strokeOpacity: 1,
              strokeWeight: 7,
            }}
          />
          <Polyline
              path={google.maps.geometry.encoding.decodePath("a|olEl}}mUv@wAVIh@LBB`@f@T`A?T?FL@fADCrAOjDIjAYnCS~Aq@tDc@bBRNJHENo@rB{AtDw@dBeBxCcAxAgAtA}BrCyArBa@r@q@zAkD~HiBfDeB|B{@dAyBvBkArAw@~@y@lA{@vArApAGHJOHHzAxAfC`C~F|F|GdHlAhA|A`BhEdEdCbC~ExErHnHnBhBdF|EjClCfFpFrBvBjAtArBlBjAbAfBfA`Bv@dBf@v@RzAT~@HpADdBBxA@zKLnHLJCjBBtADrBFl@?|AM`Cg@jBi@t@[zCyAfFkCxH}DtDkB`@bDpBjO|AjLrAzKbBbMHx@Dd@BdAA|CEnAOxAO~@o@pCk@`BgAtBwAjCEENW^q@lA{Bx@kBRo@J]JHRLTNb@TN@NM\\\\RH?P@CV@JBMZNzAr@HhAfAI@XFx@@Nj@Aj@?fBZVJFJ`@TTNZVNV|@bA`@`@^x@@PJZHLJBj@zAJBNANGTV")}
              // geodesic={false}
              options={{
                strokeColor: "#FF0000",
                strokeOpacity: 1,
                strokeWeight: 7,
              }}
          />
        </GoogleMap>
      </>
    );
  };
  return isLoaded ? renderMap() : <p>Loading..</p>;
}

export default MyComponent;
