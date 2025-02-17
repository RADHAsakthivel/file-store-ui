import { FileDto } from "./file.dto";

export type FolderDto = {
    _id: string;
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

export class FolderDtoClass{
    public _id!: string;
    public name!: string;
    public description!: string;
    public children!: FolderDto[];
    public file!: FileDto[];
    public isExpanded!: boolean;
    public isSelected!: boolean;
    public isDisabled!: boolean;
    public isLeaf!: boolean;
    public isRoot!: boolean;
    public level!: number;
    public parent!: FolderDto | null | undefined;
    public createdAt!: Date;
    public updatedAt!: Date;

    constructor(){
        
    }
}