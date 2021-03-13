import axios from "axios";

/**
 * This is the controller file for our back-end application and band database
 */

 // Back-end url
const API_URL = "http://localhost:5000/api";

/**
 * Gets a preview list of bands in the specified country. This was used in the demo. It retrieves all bands in "Black" genre.
 * @param country name of country e.g. Finland
 */
export async function getPreviewBands(country: string) {
  try {
    if (country === "Czech Rep.") country = "Czechia";
    const response = await axios.get(`${API_URL}/bands/preview/${country}`);
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}

export async function getBandsByCountry(country: string) {
  try {
    if (country === "Czech Rep.") country = "Czechia";
    const response = await axios.get(`${API_URL}/bands/country/${country}`);
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}

/**
 * Gets all bands in a specified country and a specified genre
 * @param country name of country e.g. Finland
 * @param genre name of genre e.g. Black Metal
 */
export async function getBandsByCountryAndGenre(
  country: string,
  genre: string,
) {
  try {
    const response = await axios.get(
      `${API_URL}/bands/country/${country}/genre/${genre}`,
    );
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}

/**
 * Get all bands in a specified country with the specified status
 * @param country name of country
 * @param status band status e.g. Active
 */
export async function getBandsByCountryAndStatus(
  country: string,
  status: string,
) {
  try {
    if (country === "Czech Rep.") country = "Czechia";
    const response = await axios.get(
      `${API_URL}/bands/country/${country}/status/${status}`,
    );
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}

/**
 * Gets all bands in a specified country with the specified name
 * @param country name of country
 * @param name full or partial name of a band
 */
export async function getBandsByCountryAndName(country: string, name: string) {
  try {
    if (country === "Czech Rep.") country = "Czechia";
    const response = await axios.get(
      `${API_URL}/bands/country/${country}/${name}`,
    );
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}

/**
 * Gets all bands with the specified name
 * @param name full or partial name of a band
 */
export async function getBandsByName(name: string) {
  try {
    const response = await axios.get(`${API_URL}/bands/${name}`);
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}

/**
 * Gets all bands with the specified name and status
 * @param name full or partial name of a band
 * @param status band status e.g. Active
 */
export async function getBandsByNameAndStatus(name: string, status: string) {
  try {
    const response = await axios.get(
      `${API_URL}/bands/${name}/status/${status}`,
    );
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}

/**
 * Gets all bands in the specified genre with the specified name
 * @param genre name of genre e.g. Black Metal
 * @param name full or partial name of a band
 */
export async function getBandsByGenreAndName(genre: string, name: string) {
  try {
    const response = await axios.get(`${API_URL}/bands/genre/${genre}/${name}`);
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}

/**
 * Gets all bands in the specified genre with the specified status
 * @param genre name of genre
 * @param status band status
 */
export async function getBandsByGenreAndStatus(genre: string, status: string) {
  try {
    const response = await axios.get(
      `${API_URL}/bands/genre/${genre}/status/${status}`,
    );
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}

/**
 * Gets all bands in the specified genre
 * @param genre name of genre e.g. Black Metal
 */
export async function getBandsByGenre(genre: string) {
  try {
    const response = await axios.get(`${API_URL}/bands/genre/${genre}`);
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}

/**
 * Gets all bands with the specified status
 * @param status band status
 */
export async function getBandsByStatus(status: string) {
  try {
    const response = await axios.get(`${API_URL}/bands/status/${status}`);
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}