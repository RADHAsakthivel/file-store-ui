import {FolderDtoClass} from "../src/dto/folder.dto";


export function getTotalCount(folderDtoClasses: FolderDtoClass[]): number {
    if (!folderDtoClasses?.length) return 0;
    
    let fileCount = 0;
    for (let i = 0; i < folderDtoClasses.length; i++) {
        fileCount += getFileCount(folderDtoClasses[i]);
    }

    return fileCount;
}

function getFileCount(folderData: FolderDtoClass): number {
    if (!folderData) return 0;

    let fileCount = folderData.files ? folderData.files.length : 0;

    if (folderData.children?.length) {
        for (const child of folderData.children) {
            fileCount += getFileCount(child); 
        }
    }

    return fileCount;
}


export function getFolderCount(folderDtoClasses: FolderDtoClass[]): number {
    if (!folderDtoClasses?.length) return 0;
    
    let folderCount = 0;
    for (let i = 0; i < folderDtoClasses.length; i++) {
        folderCount += getFolderTotalCount(folderDtoClasses[i]);
    }

    return folderCount;
}

function getFolderTotalCount(folderData: FolderDtoClass): number {
    if (!folderData) return 0;

    let folderCount = 1;

    if (folderData.children?.length) {
        for (const child of folderData.children) {
            folderCount += getFolderTotalCount(child); 
        }
    }

    return folderCount;
}