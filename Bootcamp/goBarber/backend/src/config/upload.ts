import path from 'path';
import crypto from 'crypto';
import multer, { StorageEngine } from 'multer';

const tempFolder = path.resolve(__dirname, '..', '..', 'temp');

interface IUploadConfig {
    driver: 's3' | 'disk';

    tempFolder: string;
    uploadsFolder: string;

    multer: {
        storage: StorageEngine;
    };

    config: {
        aws: {
            bucket: string;
        };
    };
}

export default {
    driver: process.env.STORAGE_DRIVER,

    tempFolder,
    uploadsFolder: path.resolve(tempFolder, 'uploads'),

    multer: {
        storage: multer.diskStorage({
            destination: tempFolder,
            filename(_request, file, callback) {
                const fileHash = crypto.randomBytes(10).toString('hex');
                const filename = `${fileHash}-${file.originalname}`;

                return callback(null, filename);
            },
        }),
    },

    config: {
        aws: {
            bucket: 'app-gobarber-2',
        },
    },
} as IUploadConfig;
