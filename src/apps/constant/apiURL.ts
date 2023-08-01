export const baseURL = "https://fakestoreapi.com";
export const productsAPI = baseURL + "/products";
export const categoriesAPI = productsAPI + "/categories";
export const productBycategoriesAPI = (id: string) => productsAPI + "/category/" + id;
