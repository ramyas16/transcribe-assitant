import * as mongoose from 'mongoose';

import { Model } from 'mongoose';

type TemplateType = TemplateModel & mongoose.Document;

export interface CreateTemplateResponse {
    id: string;
}

export interface TemplateModel {
    section_name: {
        type: String;
        required: true;
    };
    section_template: {
        type: Object;
        required: true;
    };
}
const TemplatesSchema = new mongoose.Schema(
    {
        section_name: {
            type: String,
            required: true
        },
        section_template: {
            type: Object,
            required: true
        }
    },
    {
        versionKey: false
    }
);
const Template: Model<TemplateType> = mongoose.model<TemplateType>('Template', TemplatesSchema);
export default Template;
