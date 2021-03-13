import axios from "axios";

const API_URL = "http://localhost:5000/api";

export async function yoinkData(link:any) {
    const response = await axios.post(`${API_URL}/band/data`,{"link": link});
    return response.data
}