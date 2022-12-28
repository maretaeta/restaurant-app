import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASEURL;

export const getMenuList = async () => {
    const menu = await axios.get(`${baseUrl}/api/menus/`);
    return menu.data;
};