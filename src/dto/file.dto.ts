import { DocumentTypeEnum } from '../enum/DocumentType.enum';
import { FileExtensionTypeEnum } from '../enum/FileExtensionType.enum';

export type FileDto = {
    _id: string;
    name: string;
    description?: string;
    size: number;
    type: DocumentTypeEnum;
    extention: FileExtensionTypeEnum;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
    deletedAt: Date;
    createdBy: string;
    updatedBy: string;
    deletedBy: Date;
    parentId: string;
}

export class FileDtoClass{
    _id!: string;
    name!: string;
    description?: string;
    size!: number;
    type!: DocumentTypeEnum | string;
    extension!: FileExtensionTypeEnum | string;
    createdAt!: Date;
    updatedAt!: Date;
    isDeleted!: boolean;
    deletedAt!: Date;
    createdBy!: string;
    updatedBy!: string;
    deletedBy!: Date;
    parentId!: string;
}