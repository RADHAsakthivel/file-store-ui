import axios from "axios";

export const getFolders = async () => {
  try {
    console.log(import.meta.env.VITE_GET_FOLDERS_API);
    const response = await axios.get(
      import.meta.env.VITE_GET_FOLDERS_API
    );
    console.log("getFolder response =>", response);
    return response;
  } catch (e) {
    console.log("got error while uploading file => ", e);
  }
};
