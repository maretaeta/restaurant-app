import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;

export const getMenuList = async () => {
    const menu = await axios.get(`${baseUrl}/api/menus/`);
    return menu.data;
};

export const getFaq = async () => {
    const faq = await axios.get(`${baseUrl}/api/faq/`);
    return faq.data;
}

export const getProfile = async () => {
  const profile = await axios.get(`${baseUrl}/api/profile/`);
  return profile.data;
};
