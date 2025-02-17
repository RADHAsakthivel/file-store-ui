import axios from "axios";
import { FolderDtoClass } from "../src/dto/folder.dto";

export const createFolder = async (folderData: FolderDtoClass) => {
  try {
    const response = await axios.post(
      import.meta.env.VITE_CREATE_FOLDER_API,
      folderData,
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
