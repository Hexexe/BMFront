import axios from "axios";

const API_URL = "http://localhost:5000/api";
const PROXY = "https://cors-anywhere.herokuapp.com/";

// Preview api call for demo purposes
export async function getPreviewBands(country: string) {
  try {
    if (country === "Czech Rep.") country = "Czechia";
    const response = await axios.get(`${API_URL}/bands/preview/${country}`);
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}

// ghetto tier dogshit setup dont do this
export async function yoinkImages(links: any) {
  let res = null;
  for (let i = 0; i < links.length; i++) {
    try {
      const response = await axios.get(PROXY + links[i]);
      if (response.status === 404) {
        continue;
      } else {
        res = links[i];
        break;
      }
    } catch (e) {
      console.log(e);
    }
  }
  return res !== null
    ? res
    : "https://tutaki.org.nz/wp-content/uploads/2019/04/no-image-1.png";
}

export async function getBandsByCountry(country: any) {
  try {
    const response = await axios.get(`${API_URL}/bands/country/${country}`);
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}
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
export async function getBandsByCountryAndStatus(
  country: string,
  status: string,
) {
  try {
    const response = await axios.get(
      `${API_URL}/bands/country/${country}/status/${status}`,
    );
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}
export async function getBandsByCountryAndName(country: string, name: string) {
  try {
    const response = await axios.get(
      `${API_URL}/bands/country/${country}/${name}`,
    );
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}
export async function getBandsByName(name: string) {
  try {
    const response = await axios.get(`${API_URL}/bands/${name}`);
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}
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
export async function getBandsByGenreAndName(genre: string, name: string) {
  try {
    const response = await axios.get(`${API_URL}/bands/genre/${genre}/${name}`);
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}
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
export async function getBandsByGenre(genre: string) {
  try {
    const response = await axios.get(`${API_URL}/bands/genre/${genre}`);
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}
export async function getBandsByStatus(status: string) {
  try {
    const response = await axios.get(`${API_URL}/bands/status/${status}`);
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}
