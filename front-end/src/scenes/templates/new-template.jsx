import * as yup from 'yup';

import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    TextareaAutosize
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import _, { isEmpty } from 'lodash';

import Api from '../../services/api';
import { Formik } from 'formik';
import Header from '../../components/Header';
import useMediaQuery from '@mui/material/useMediaQuery';

const NewTemplates = () => {
    const isNonMobile = useMediaQuery('(min-width:600px)');
    const [dataTypes, setDataTypes] = useState({});
    const [variables, setVariables] = useState([]);
    useEffect(() => {
        async function fetchData() {
            // Fetch data
            const api = new Api();
            const { data } = await api.getDataTypes();
            const results = [];
            // Store results in the results array
            data.forEach(value => {
                results.push({
                    id: value._id,
                    name: value.name,
                    variable_name: value.variable_name,
                    key: value._id
                    //value: value.id
                });
            });
            //console.log(JSON.stringify(results));
            // Update the options state
            setDataTypes(results);
        }
        if (isEmpty(dataTypes)) {
            fetchData();
        }
        // Trigger the fetch
    }, []);

    const handleChange = e => {
        setVariables([...e.target.value]);
    };
    console.log(variables);

    const handleFormSubmit = async values => {
        // console.log('FORM submit');
        // console.log(values);
    };

    const getDataType = () => {
        if (!isEmpty(dataTypes)) {
            // dataTypes.map(option => {
            //     console.log('OPTION', option);
            // });
            return dataTypes.map(option => {
                return (
                    <MenuItem key={option.id} value={option.variable_name}>
                        {option.name}
                    </MenuItem>
                );
            });
        }
    };

    const y = [
        {
            id: '640a5c3d181eec9d02d28104',
            name: 'weight',
            variable_name: 'WEIGHT_IN_KG',
            key: '640a5c3d181eec9d02d28104'
        },
        {
            id: '640a5cd7181eec9d02d28106',
            name: 'weight',
            variable_name: 'WEIGHT_IN_KG',
            key: '640a5cd7181eec9d02d28106'
        },
        {
            id: '640a5ea6181eec9d02d28108',
            name: 'weight',
            variable_name: 'WEIGHT_IN_KG',
            key: '640a5ea6181eec9d02d28108'
        },
        {
            id: '640a5f14582aa39610bcbf57',
            name: 'weight',
            variable_name: 'WEIGHT_IN_KG',
            key: '640a5f14582aa39610bcbf57'
        },
        {
            id: '640a637ba46e86c0bac3de0b',
            name: 'weight',
            variable_name: 'WEIGHT_IN_KG',
            key: '640a637ba46e86c0bac3de0b'
        },
        {
            id: '640a68da96a561f5c1384efd',
            name: 'RBC',
            variable_name: 'RBCCount',
            key: '640a68da96a561f5c1384efd'
        }
    ];

    return (
        <Box m="20px">
            <Header title="CREATE NEW TEMPLATE" subtitle="Create a New Template" />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth>
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
                                    label="Section Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.name}
                                    name="name"
                                    sx={{ gridColumn: 'span 3' }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="textarea"
                                    label="Section Template"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    multiline
                                    rows={10}
                                    value={values.section_template}
                                    name="section_template"
                                    sx={{ gridColumn: 'span 3' }}
                                />

                                <TextField
                                    id="filled-select-dataType"
                                    select
                                    label="Variable 1"
                                    helperText="Please select your variable 1"
                                    onChange={handleChange}
                                    variant="filled"
                                    defaultValue=""
                                    name="variable1"
                                    sx={{ gridColumn: 'span 3' }}
                                >
                                    {/* {y.data.map(option => (
                                        <MenuItem key={option._id} value={option.variable_name}>
                                            {option.control_type}
                                        </MenuItem>
                                    ))} */}
                                    <MenuItem key="xx" value="Choose">
                                        Choose
                                    </MenuItem>

                                    {getDataType()}
                                </TextField>

                                <TextField
                                    id="filled-select-dataType"
                                    select
                                    label="Variable 2"
                                    helperText="Please select your variable 2"
                                    variant="filled"
                                    onChange={handleChange}
                                    defaultValue=""
                                    name="variable2"
                                    sx={{ gridColumn: 'span 3' }}
                                >
                                    {/* {y.data.map(option => (
                                        <MenuItem key={option._id} value={option.variable_name}>
                                            {option.control_type}
                                        </MenuItem>
                                    ))} */}
                                    <MenuItem key="xx" value="Choose">
                                        Choose
                                    </MenuItem>

                                    {getDataType()}
                                </TextField>

                                <TextField
                                    id="filled-select-dataType"
                                    select
                                    label="Variable 3"
                                    defaultValue=""
                                    helperText="Please select your variable 3"
                                    variant="filled"
                                    onChange={handleChange}
                                    name="variable3"
                                    sx={{ gridColumn: 'span 3' }}
                                >
                                    <MenuItem key="xx" value="Choose">
                                        Choose
                                    </MenuItem>

                                    {getDataType()}
                                </TextField>
                            </Box>
                        </FormControl>

                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Create Template
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};
const checkoutSchema = yup.object().shape({
    name: yup.string().required('required'),
    section_temnplate_content: yup.string().required('required'),
    control_types: yup.string().required('required')
});
const initialValues = {
    name: '',
    base_data_type: '',
    control_type: '',
    variable_name: '',
    variable1: '',
    variable2: '',
    variable3: ''
};
export default NewTemplates;
