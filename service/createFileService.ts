import axios from "axios";
import { FolderDto } from "../src/dto/folder.dto";

export const createFolder = async (folderData: FolderDto) => {
  try {
    console.log(import.meta.env.VITE_CREATE_FOLDER_API);
    const response = await axios.post(
      import.meta.env.VITE_CREATE_FOLDER_API,
      folderData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("createFolder response =>", response);
    return response;
  } catch (e) {
    console.log("got error while uploading file => ", e);
  }
};
