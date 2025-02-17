import { FileDto, FileDtoClass } from "./file.dto";

export type FolderDto = {
  _id: string;
  name: string;
  description: string;
  nodeType: string;
  children: FolderDto[];
  files: FileDto[];
  parent: string | null | undefined;
  createdAt:Date;
  updatedAt:Date;
};

export class FolderDtoClass {
  _id!: string;
  name!: string;
  description!: string;
  parent!: string | null | undefined;
  files!: FileDtoClass[];
  children!: FolderDtoClass[];
}
