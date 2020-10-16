import axios from "axios";

// vippaa tää backend
import cheerio from 'cheerio'

// get rid of this
const PROXY = "https://cors-anywhere.herokuapp.com/";

// {
//     headers: {
//     "Access-Control-Allow-Origin": "*",}
//  }


// ghetto tier dogshit setup dont do this
export async function yoinkData(link:any) {
    const id = link.match(/\d+$/).toString();
    const linkk:any = await axios.get(PROXY+link)
    const discography = await axios.get(PROXY+`https://www.metal-archives.com/band/discography/id/${id}/tab/all`)
    const kys = cheerio.load(linkk.data)
    const photoUrl = kys('#photo').attr('href');
    const logoUrl = kys('#logo').attr('href');
    const location = kys('#band_stats .float_left dt').nextAll().eq(2).text()
    const formYear = kys('#band_stats .float_left dt').nextAll().eq(6).text();
    const yearsActive = kys('#band_stats .clear dt').nextAll().eq(0).text()
    
    return {"photo":photoUrl,
    "logo":logoUrl,
    "location":location,
    "formYear":formYear,
    "yearsActive":yearsActive,
    "discography":discography.data
    }
}