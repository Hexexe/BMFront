import axios from "axios";

// vippaa tää backend
import cheerio from 'cheerio'

const API_URL = "http://localhost:5000/api";

export async function yoinkData(link:any) {
    const response = await axios.post(`${API_URL}/band/data`,{"link": link});
    return response.data
    //const id = link.match(/\d+$/).toString();
    //const discography = await axios.get(PROXY+`https://www.metal-archives.com/band/discography/id/${id}/tab/all`)
}