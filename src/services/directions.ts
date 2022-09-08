import Config from "./config.json";

//TODO: put these in SSR instead

export const getMultiModalDirections = async (origin: string, destination: string) => {
    const resp: Response = await fetch(`${Config.baseUrl}/${Config.multiModDirection}/${origin}/${destination}`,
        {
                method: "GET",
                headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
            },
    )
    const data = await resp.json();
    return await resp.json();
}