import {multimodalDirection} from "../hooks/directionContext";
import Config from "../services/config.json";

export default function directionReducer(directions, action): multimodalDirection|undefined {
    switch (action.type) {
        case 'CHANGE_DIRECTIONS': {
            //TODO: convert this to redux since useReducer doesn't supoprt async natively
            getMultiModalDirections(action.origin, action.destination)
                .then((data) => {
                    directions = data;
                });
            break;
        }
        case "CLEAR_DIRECTIONS": {
            return null;
        }
    }
}

async function getMultiModalDirections  (origin: string, destination: string): Promise<multimodalDirection> {
    const resp: Response = await fetch(`${Config.baseUrl}/${Config.multiModDirection}/${origin}/${destination}`,
        {
            method: "GET",
            headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
        },
    )
    return await resp.json();
}