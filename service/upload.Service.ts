import axios from "axios";

export const upLoadFile = async (fileData: FormData) => {
  try {
    const response = await axios.post(
      import.meta.env.VITE_FILE_UPLOAD_API,
      fileData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response
  } catch (e) {
    console.log("got error while uploading file => ", e);
  }
};
