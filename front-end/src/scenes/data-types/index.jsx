import * as yup from 'yup';

import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';

import Api from '../../services/api';
import { Formik } from 'formik';
import Header from '../../components/Header';
import useMediaQuery from '@mui/material/useMediaQuery';

const DataTypes = () => {
    const dataType = [
        {
            value: '',
            label: 'Select'
        },
        {
            value: 'int',
            label: 'Integer'
        },
        {
            value: 'varchar',
            label: 'Varchar'
        },
        {
            value: 'float',
            label: 'Float'
        },
        {
            value: 'text',
            label: 'Text'
        }
    ];

    const controlType = [
        {
            value: '',
            label: 'Select'
        },
        {
            value: 'textbox',
            label: 'TextBox'
        },
        {
            value: 'radio',
            label: 'Radio'
        },
        {
            value: 'checkbox',
            label: 'Checkbox'
        },
        {
            value: 'text',
            label: 'Text'
        },
        {
            value: 'number',
            label: 'Number'
        }
    ];
    const isNonMobile = useMediaQuery('(min-width:600px)');

    // const [newData, setNewData] = useState(Boolean);
    // const [newDataTypeName, setNewDataTypeName] = useState(Boolean);
    const handleFormSubmit = async values => {
        const api = new Api();
        const response = await api.postDataType(values);
        // setNewData(true);
        // setNewDataTypeName(values.data.name);
        console.log(values);
        console.log(response);
    };

    return (
        <Box m="20px">
            <Header title="CREATE NEW DATA TYPE" subtitle="Create a New Data Type" />
            {/* <div>
                {newData ? <Header subtitle={`New Data Type Created ${newData}`} /> : <Header />}
            </div> */}
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        {/* <FormControl fullWidth> */}
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                '& > div': { gridColumn: isNonMobile ? undefined : 'span 3' }
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Data Type Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                                name="name"
                                // error={!!touched.dataTypeName && !!errors.dataTypeName}
                                // helperText={touched.dataTypeName && errors.dataTypeName}
                                sx={{ gridColumn: 'span 3' }}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Variable Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.variable_name}
                                name="variable_name"
                                // error={!!touched.dataTypeName && !!errors.dataTypeName}
                                // helperText={touched.dataTypeName && errors.dataTypeName}
                                sx={{ gridColumn: 'span 3' }}
                            />
                            {/*
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Control Type"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.control_type}
                                name="control_type"
                                // error={!!touched.dataTypeName && !!errors.dataTypeName}
                                // helperText={touched.dataTypeName && errors.dataTypeName}
                                sx={{ gridColumn: 'span 3' }}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Data Type"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.base_data_type}
                                name="base_data_type"
                                // error={!!touched.dataTypeName && !!errors.dataTypeName}
                                // helperText={touched.dataTypeName && errors.dataTypeName}
                                sx={{ gridColumn: 'span 3' }}
                            /> */}

                            <TextField
                                id="filled-select-dataType"
                                select
                                label="Data Type"
                                helperText="Please select your data type"
                                onChange={handleChange}
                                variant="filled"
                                defaultValue=""
                                name="control_type"
                                sx={{ gridColumn: 'span 3' }}
                            >
                                {dataType.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="filled-select-control-type"
                                select
                                label="Control Type"
                                helperText="Please select your control type"
                                onChange={handleChange}
                                variant="filled"
                                defaultValue=""
                                name="base_data_type"
                                sx={{ gridColumn: 'span 3' }}
                            >
                                {controlType.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                        {/* </FormControl> */}

                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Create
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

// const phoneRegExp =
//     /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    name: yup.string().required('required'),
    base_data_type: yup.string().required('required'),
    control_type: yup.string().required('required'),
    variable_name: yup.string().required('required')
});
const initialValues = {
    name: '',
    base_data_type: '',
    control_type: '',
    variable_name: ''
};
export default DataTypes;
