import axios from "axios";

export const healthService = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_GET_FOLDERS_API);
    return response
  } catch (e) {
    console.log("got error while fetching data => ", e);
  }
};
