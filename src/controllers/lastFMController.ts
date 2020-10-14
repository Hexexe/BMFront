import axios from "axios"

// Last.fm api key
const API_KEY = "2c131edafd8f5b144bbfa5395aa04031";
const LAST_FM_URL = "http://ws.audioscrobbler.com/2.0";
//const KYS = "?method=tag.gettopartists&tag=disco&api_key=YOUR_API_KEY&format=json";

// Last.fm API --- GET top albums by genre tag
export async function getTopAlbumsByTag(tag: string) {
    try {
      const response = await axios.get(`${LAST_FM_URL}/?method=tag.gettopalbums&tag=${tag}&api_key=${API_KEY}&format=json`);
      return response.data;
    } catch (error) {
      return await Promise.reject(error.message);
    }
  }

// Last.fm API --- Get top artists by genre tag
export async function getTopArtistsByTag(tag: string) {
    try {
      const response = await axios.get(`${LAST_FM_URL}/?method=tag.gettopartists&tag=${tag}&api_key=${API_KEY}&format=json`);
      return response.data;
    } catch (error) {
      return await Promise.reject(error.message);
    }
  }