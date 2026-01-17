// Launch details returned by the SpaceX API
export interface Launch {
    flight_number: number;
    mission_name: string;
    launch_date_utc: string;
    rocket: Rocket;
    links: Link;
}  

// Rocket details
interface Rocket {
    rocket_id: string | null;
    rocket_name: string | null;
    rocket_type: string | null;
}

// Links related to the launch
interface Link {
    mission_patch: string;
    article_link: string | null;
    video_link: string | null;
    wikipedia: string | null;
    youtube_id: string | null;
}