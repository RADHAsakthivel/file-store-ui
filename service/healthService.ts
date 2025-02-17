import axios from "axios";

export const healthService = async () => {
  try {
    console.log(import.meta.env.VITE_GET_FOLDERS_API);
    const response = await axios.get(import.meta.env.VITE_GET_FOLDERS_API);
    console.log("healthService response =>", response);
  } catch (e) {
    console.log("got error while fetching data => ", e);
  }
};
