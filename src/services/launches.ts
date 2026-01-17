const URL: string = "https://api.spacexdata.com/v3";

export async function getAllLaunches() {

    try {

        const response: any = await fetch(`${URL}/launches`);
        const data: any = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching launches:", error);
        throw new Error("Failed to fetch launches");
    }
    
}

export async function getLaunchByFlightNumber(flightNumber: number) {
    try {

        const response: any = await fetch(`${URL}/launches/${flightNumber}`);
        const data: any = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching launch by flight number:", error);
        throw new Error("Failed to fetch launch by flight number");
    }
}