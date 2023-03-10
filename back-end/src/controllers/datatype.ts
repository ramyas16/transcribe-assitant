import DataType, { DataTypeModel } from '../models/datatype';

import { RequestHandler } from 'express';

export const createDataType: RequestHandler = async (req, res, next) => {
    try {
        const data: DataTypeModel = req.body;
        console.log('Data', data);
        const response = await DataType.create(data);
        return res.status(200).json({ message: 'DataType created successfully', data: response });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const getDataType: RequestHandler = async (req, res, next) => {
    try {
        const response = await DataType.find({});
        return res.status(200).json({ data: response });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateDataType: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await DataType.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json({ message: 'DataType updated successfully!', data: response });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteDataType: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        var isDeleted = await DataType.findByIdAndDelete(id);
        if (!isDeleted) throw new Error('Failed to delete DataType');
        return res.status(200).json({ message: 'DataType deleted successfully!' });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};
