import {promises as fs} from 'fs';

const writeFs = async (_dirName, data) => {
    try {
        const file = await fs.writeFile(_dirName, JSON.stringify(data, null, 2), 'utf-8');
        console.log('file written', file);
    } catch (error) {
        console.error('error in wirteFs', error);
    }
};

export default writeFs 