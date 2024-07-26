import url from 'url';
import path, { parse } from 'path';
import {writeFs, readFs} from '../helpers/index.js';

const _fileName = url.fileURLToPath(import.meta.url);
const _dirName = path.dirname(_fileName);

const fileWarehouse = path.join(_dirName, '../../data/warehouse.json');

const getAll = async (req, res) => {
    try {
        const data = await readFs(fileWarehouse);
        res.status(200).json({message: 'success', data: data});
    } catch (err) {
        console.error('error in getAll', err);
        res.status(500).json({message: 'error in server', data: err});
    }
};

const getOne = async (req, res) => {
    try {
        const data = await readFs(fileWarehouse);
        const warehouseIndex = data.findIndex(warehouse => warehouse.id === parseInt(req.params.id));
        if (warehouseIndex === -1) {
            res.status(404).json({message: 'warehouse not found'});
            return console.error('warehouse not found');
        }
        res.status(200).json({message: 'success', data: data[warehouseIndex]});
    } catch (err) {
        console.error('error in getOne', err);
        res.status(500).json({message: 'error in server', data: err});
    }
};

const post = async (req, res) => {
    try {
        const data = await readFs(fileWarehouse);
        const newWarehouse = {
            id: data.length + 1,
            name: req.body.name,
            location: req.body.location,
        };
        data.push(newWarehouse);
        await writeFs(fileWarehouse, data);
        res.status(200).json({message: 'warehouse created successfully', warehouse: newWarehouse});
    } catch (err) {
        console.error('error in post', err);
        res.status(500).json({message: 'error in server', data: err});
    }
};

const put = async (req, res) => {
    try {
        const data = await readFs(fileWarehouse);
        const warehouseIndex = data.findIndex(warehouse => warehouse.id === parseInt(req.params.id));
        if (warehouseIndex === -1) {
            res.status(404).json({message: 'warehouse not found'});
            return console.error('warehouse not found');
        };
        data[warehouseIndex] = {...data[warehouseIndex],...req.body};
        await writeFs(fileWarehouse, data);
        res.status(200).json({message: 'warehouse updated successfully', warehouse: data[warehouseIndex]});
    } catch (err) {
        console.error('error in the put method');
    }
};


export { 
    getAll,
    post,
    getOne,
    put
};