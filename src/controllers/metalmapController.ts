import axios from "axios";

// metal-map.com api url
const API_URL = "https://api.metal-map.com/v1";

// EI TOIMI KOSKA CORS ;--DDDDDDDD (╯°□°）╯︵ ┻━┻)  ☜(ﾟヮﾟ☜)
// Get bands by country e.g. Finland = FI
export async function getBands(countryCode: string) {
    try {
      const response = await axios.get(`${API_URL}/countries/${countryCode}/bands?page=1`);
      return response.data;
    } catch (error) {
      return await Promise.reject(error.message);
    }
  }

  // Get band info by api id
export async function getBandInfo(bandID: string) {
    try {
      const response = await axios.get(`${API_URL}/bands/${bandID}`);
      return response.data;
    } catch (error) {
      return await Promise.reject(error.message);
    }
  }

  // Get search result
export async function getSearch(bandName: string) {
    try {
      const response = await axios.get(`${API_URL}/search/${bandName}`);
      return response.data;
    } catch (error) {
      return await Promise.reject(error.message);
    }
  }

  // Get top lists
  export async function getTopLists() {
    try {
      const response = await axios.get(`${API_URL}/top`);
      return response.data;
    } catch (error) {
      return await Promise.reject(error.message);
    }
  }