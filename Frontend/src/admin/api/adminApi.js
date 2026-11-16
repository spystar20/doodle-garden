import { api } from "../../../axios/api";

export const fetchMenu = async () => {
    const res = await api.get('/user/menu/')
    return res.data.menu
}
export const editMenu = async ({ data, itemId }) => {
    const res = await api.put(`/admin/menu/${itemId}/edit`, data);
    return res.data;
};