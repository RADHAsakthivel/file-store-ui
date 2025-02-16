import { FileDto } from "./file.dto";

export type FolderDto = {
    id: string;
    name: string;
    description: string;
    children: FolderDto[];
    file: FileDto[];
    isExpanded: boolean;
    isSelected: boolean;
    isDisabled: boolean;
    isLeaf: boolean;
    isRoot: boolean;
    level: number;
    parent: FolderDto | null | undefined;
    createdAt: Date;
    updatedAt: Date;
};