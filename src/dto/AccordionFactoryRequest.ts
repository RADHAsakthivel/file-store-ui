import { FolderDto } from "./folder.dto";

 type AccordingFactoryRequest = {
  data: FolderDto[];
  level: number;
  otherStyle?: string;
}

export default AccordingFactoryRequest;