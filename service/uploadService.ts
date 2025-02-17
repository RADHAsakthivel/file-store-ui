import axios from "axios";

export const upLoadFile = async (fileData: FormData) => {
  try {
    console.log("upLoadFile input => ", fileData.get('metadata'));
    console.log(import.meta.env.VITE_FILE_UPLOAD_API);
    const response = await axios.post(
      import.meta.env.VITE_FILE_UPLOAD_API,
      fileData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("upLoadFile response =>", response);
  } catch (e) {
    console.log("got error while uploading file => ", e);
  }
};
