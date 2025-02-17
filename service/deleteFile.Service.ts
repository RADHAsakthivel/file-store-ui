import axios from "axios";

export const deleteFile = async (id: string) => {
    const url = import.meta.env.VITE_GET_FILE_DELETE_API as string;
  try {
    const response = await axios.delete(
      `${url}/${id}`,
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
