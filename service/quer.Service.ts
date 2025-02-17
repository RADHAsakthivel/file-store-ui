import axios from "axios";
import { FilterState } from "../src/dto/filterDto";

export const getQueryData = async (params: FilterState) => {
  try {
    const response = await axios.get(
      import.meta.env.VITE_GET_QUERY_FOLDERS_API,
      {params}
    );
    return response;
  } catch (e) {
    console.log("got error while uploading file => ", e);
  }
};
