import * as mongoose from 'mongoose';

import { Model } from 'mongoose';

type DataTypeType = DataTypeModel & mongoose.Document;

export interface CreateDataTypeResponse {
    id: string;
}

export interface DataTypeModel {
    name: {
        type: String;
        required: true;
    };
    base_data_type: {
        type: String;
        required: true;
    };
    control_type: {
        type: String;
        required: true;
    };
    variable_name: {
        type: String;
        required: true;
    };
    scope_type: {
        type: String;
        required: false;
    };
    min: {
        type: Number;
        required: false;
    };
    max: {
        type: Number;
        required: false;
    };
    valid_values: {
        type: String;
        required: false;
    }; //#regex,
    default_values: {
        type: String;
        required: false;
    };
    additional_values: {
        type: String;
        required: false;
    };
    override_values: {
        type: String;
        required: false;
    };
}
const DataTypesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        base_data_type: {
            type: String,
            required: true
        },
        control_type: {
            type: String,
            required: true
        },
        variable_name: {
            type: String,
            required: true
        },
        scope_type: {
            type: String,
            required: false
        }, // #global/tenant/user

        min: {
            type: Number,
            required: false
        },
        max: {
            type: Number,
            required: false
        },
        valid_values: {
            type: String,
            required: false
        }, //#regex,
        default_values: {
            type: String,
            required: false
        },
        additional_values: {
            type: String,
            required: false
        },
        override_values: {
            type: String,
            required: false
        }
    },
    {
        versionKey: false
    }
);
const DataType: Model<DataTypeType> = mongoose.model<DataTypeType>('DataType', DataTypesSchema);
export default DataType;
