import CONST from '@src/CONST';

function getFolderPathSuffix(environment: string) {
    let folderSuffix = '';

    switch (environment) {
        case CONST.ENVIRONMENT.PRODUCTION:
            folderSuffix = '';
            break;
        case CONST.ENVIRONMENT.ADHOC:
            folderSuffix = ' Adhoc';
            break;
        case CONST.ENVIRONMENT.DEV:
            folderSuffix = ' Dev';
            break;
        default:
            folderSuffix = '';
            break;
    }

    return folderSuffix;
}

export default getFolderPathSuffix;
