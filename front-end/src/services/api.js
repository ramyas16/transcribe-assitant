import axios from 'axios';

class Api {
    constructor() {
        this.baseUrl = 'http://localhost:3000/v1/';
    }

    async getDataType(dataTypeId) {
        const path = `data-type/${dataTypeId}`;
        const url = new URL(path, this.baseUrl);

        const response = await axios({
            method: 'get',
            url: url
        });
        return response.data;
    }

    async getDataTypes() {
        const path = `data-type`;
        const url = new URL(path, this.baseUrl);
        const api_res = await fetch(url);
        const response = await api_res.json();
        // console.log(response);

        // const response = await axios({
        //     method: 'get',
        //     url: url
        // });
        return response;
    }

    async postDataType(payload) {
        const path = `data-type`;
        const url = new URL(path, this.baseUrl);

        const response = await axios({
            method: 'post',
            url: url,
            data: payload
            // headers: getHeaders()
        });
        return response.data;
    }
}

function getHeaders() {
    // const { accessToken } = store.getState().auth;
    // return {
    //     Authorization: `Bearer ${accessToken}`
    // };
    return {
        'content-type': 'text/json'
    };
}
export default Api;
