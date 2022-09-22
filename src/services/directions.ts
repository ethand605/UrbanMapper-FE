import Config from "./config.json";


export const getMultiModalDirections = async (origin: string, destination: string) => {
    const resp: Response = await fetch(`${Config.baseUrl}/${Config.multiModDirection}/${origin}/${destination}`,
        {
                method: "GET",
                headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
            },
    )
    return await resp.json();
}