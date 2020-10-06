import axios from "axios"

const API_URL = "http://localhost:5000/api";

export async function getBandsCountry(country: string) {
    try {
        const response = await axios.get(`${API_URL}/bands/country/${country}`);
        return response.data;
    } catch (error) {
        return await Promise.reject(error.message);
    }
}