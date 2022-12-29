import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASEURL;

export const getMenuList = async () => {
    const menu = await axios.get(`${baseUrl}/api/menus/`);
    return menu.data;
};

export const getMenuCategories = async () => {
    const menuCategories = await axios.get(`${baseUrl}/api/menus/categories/`);
    return menuCategories.data;
};
