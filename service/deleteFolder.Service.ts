import axios from "axios";

export const deleteFolder = async (id: string) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_GET_FOLDER_DELETE_API}/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (e) {
    console.log("got error while uploading file => ", e);
  }
};