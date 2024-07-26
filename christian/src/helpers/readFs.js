import {promises as fs} from 'fs';

const readFs = async (dirName) => {
    try {
        const file = await fs.readFile(dirName, 'utf8');
        return JSON.parse(file);
    } catch (error) {
        console.error('error in readFs', error);
    }
};

export default readFs