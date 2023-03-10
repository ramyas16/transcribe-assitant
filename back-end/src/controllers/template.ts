import Template, { TemplateModel } from '../models/template';

import { RequestHandler } from 'express';

export const createTemplate: RequestHandler = async (req, res, next) => {
    try {
        const data: TemplateModel = req.body;
        console.log('Data', data);
        const response = await Template.create(data);
        return res.status(200).json({ message: 'Template created successfully', data: response });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const getTemplate: RequestHandler = async (req, res, next) => {
    try {
        const response = await Template.find({});
        return res.status(200).json({ message: 'All Templates!', data: response });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateTemplate: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await Template.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json({ message: 'Template updated successfully!', data: response });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteTemplate: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        var isDeleted = await Template.findByIdAndDelete(id);
        if (!isDeleted) throw new Error('Failed to delete Template');
        return res.status(200).json({ message: 'Template deleted successfully!' });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};
